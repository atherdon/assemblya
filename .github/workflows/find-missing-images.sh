#!/usr/bin/env bash
set -eu

# Change this to your build output directory
DIST_DIR="build"   # <-- change to dist/ or build/ depending on your repo
OUT_REFERENCED="referenced_images.txt"
OUT_CSS="css_images.txt"
OUT_MISSING="missing_images.txt"

# 1) Collect image references from HTML
grep -RhoI --include="*.html" '<img [^>]*src=["'\''][^"'\'' ]*["'\'']' "$DIST_DIR" \
  | sed -E 's/.*src=["'\'']([^"'\'' ]+)["'\''].*/\1/' \
  | sort -u > "$OUT_REFERENCED"

# 2) Collect background-image urls from CSS
grep -RhoI --include="*.css" -E "url\([^)]+\)" "$DIST_DIR" \
  | sed -E "s/url\(['\"]?([^)'\"']+)['\"]?\)/\1/" \
  | sort -u > "$OUT_CSS"

# 3) Combine and check files
cat "$OUT_REFERENCED" "$OUT_CSS" | sed '/^\s*$/d' | sort -u > all_images.txt

: > "$OUT_MISSING"
while IFS= read -r ref; do
  # Ignore absolute URLs (http(s)://) and data URIs
  if [[ "$ref" =~ ^https?:// ]] || [[ "$ref" =~ ^data: ]]; then
    continue
  fi

  # Normalize leading slash: built site typically has files at ./img/...
  # Try both direct path and with DIST_DIR prefix
  if [ -f "$DIST_DIR$ref" ]; then
    continue
  elif [ -f "$DIST_DIR/${ref#/}" ]; then
    continue
  elif [ -f "$ref" ]; then
    # Sometimes references are relative and point to files already in repo
    continue
  else
    echo "MISSING: $ref" >> "$OUT_MISSING"
  fi
done < all_images.txt

echo "Referenced images saved to: all_images.txt"
echo "Missing images (if any) saved to: $OUT_MISSING"
