From Web Dev Simplified Tutorial at https://www.youtube.com/watch?v=Y-GkMjUZsmM

At 15:47, begin adding additional options:
pointers: 15:47
hover effect: 16:46
winning message button: 22:08
styling done & logic begins: 25:08

I like this color: background-color: rgba(0, 52, 53);
And this color: background-color: rgba(0, 2, 53);

Problem with the way he did the visibility. I found the solution here: https://stackoverflow.com/questions/20598568/

        how-to-display-and-hide-a-div-with-css
        To hide an element, use:

        display: none;
        visibility: hidden;
        To show an element, use:

        display: block;
        visibility: visible;
        The difference is:

        Visibility handles the visibility of the tag, the display handles space it occupies on the page.

        If you set the visibility and do not change the display, even if the tags are not seen, it still occupies space.

Then, I had to move all the visible elements to the show section.