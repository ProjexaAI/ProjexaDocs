# Video Embedding Example

This page demonstrates how to embed YouTube videos in your MkDocs documentation.

## Method 1: Using HTML iframe (Responsive)

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Method 2: Direct iframe (Fixed size)

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How to Use

1. Replace `VIDEO_ID` with your actual YouTube video ID
2. The video ID is the part after `v=` in a YouTube URL
3. Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → video ID is `dQw4w9WgXcQ`

## Best Practice

Use Method 1 (with `video-container` class) for responsive videos that adapt to different screen sizes, including mobile devices.
