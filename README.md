# Frontend Mentor - Interactive comments section

![Design preview for the Interactive comments section coding challenge](./images/desktop-preview.jpg)

## Summary

I've been learning React for a few weeks and wanted to have a go at a project. I was looking for something that re-used a lot of components, and would allow me to apply all the concepts I've been learning about. This was the perfect level of difficulty for me. Hard, but I was able to tackle most things and learnt a lot along the way.

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Expected behaviour

- First-level comments should be ordered by their score, whereas nested replies are ordered by time added.
- Replying to a comment adds the new reply to the bottom of the nested replies within that comment.
- A confirmation modal should pop up before a comment or reply is deleted.
- Adding a new comment or reply uses the `currentUser` object from within the `data.json` file.
- You can only edit or delete your own comments and replies.
- I added the ability to change users, just for fun and to test out some of the concepts I've been learning.

## Lessons learnt

- 💡 Oh, man so many...
- 💡 When using React, use React! I originally tried making the comments editable using the `contentEditable` html attribute. Although, this worked, React complained about this and I got on much better once I started replying on it to control everything.

## Problems

- ❗ Oh, man so many...
- ❗ I still feel uneasy that I don't know what happens during the build step. The app didn't work on vercel, but did on netlify, and I've no idea why as yet!
- ❗ I'm just using a script to create new components, and I don't really understand why I need an index.js file in every component folder! I feel like I really should at least understand that!

## Resources

- 🔗 I've been super lucky in that I'm one of the early testers on [Josh Comeau's Joy of React] course(https://www.joyofreact.com/), that he's currently working on. I loved his CSS course, so when I heard he was doing a React course I asked, and he kindly agreed to include me on the testing squad. I came into the course with zero React/any framework knowledge, and all I can say is that to me it looks like it's going to be an outstanding course.

## Future learning

- 🙇‍♂️ Carry on with Josh's course as he releases new modules. But if that's too slow I'll have to find another resource.
