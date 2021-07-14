del /Q C:\Users\admac\Desktop\mattwritesart\art-images\*
magick mogrify -path art-images -format jpg -resize 1500x1300 art-images-source/*.png
magick mogrify -path art-images -format webp -resize 1500x1300 art-images-source/*.png
magick mogrify -path art-images -format jpg -resize 1500x1300 art-images-source/*.JPG
magick mogrify -path art-images -format webp -resize 1500x1300 art-images-source/*.JPG
pause