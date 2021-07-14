del /Q C:\Users\admac\Desktop\mattwritesart\art-close-ups\*
magick mogrify -path art-close-ups -format jpg -resize 1800x1500 art-close-ups-source/*.png
magick mogrify -path art-close-ups -format jpg -resize 1800x1500 art-close-ups-source/*.JPG
del /Q C:\Users\admac\Desktop\mattwritesart\art-close-ups-source\*
pause