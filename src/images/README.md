Drop homepage image files into this folder using these names:

- image00.webp, image00.jpg, image00.jpeg, or image00.png
- image01.webp, image01.jpg, image01.jpeg, or image01.png
- image02.webp, image02.jpg, image02.jpeg, or image02.png
- Continue the same pattern through image43.

The component also accepts dashed names like image-01.jpg, image-02.jpg, etc.

The React page tries webp, jpg, jpeg, then png for each numbered slot. If no file exists, it shows the numbered placeholder and its alt text.
