# Sapphy Doyle Profile Site

![Screen Recording - Apr 18, 2024](https://github.com/Terafora/Sapphy-Doyle-Profile-Site/assets/144109245/da7a7fad-5dc3-47dd-a7aa-0abf8fae9605)

## About

This is a website made for Sapphy Doyle, a young professional currently seeking employment.
I spoke to Sapphy and decided to work along side her coming up with a design for a profile site which would help her stand out to potential employers in her job search.
As this is being made for free I had one condition which was that I was allowed to use any technology I wanted and I've learned a fair amount of React through online resources, but haven't had much experience with it I decided to use React along with React BootStrap and TsParticles to take care of the presentation and layout respectively by creating a single page application portfolio for her.

### Home

![Screen Recording - Apr 18, 2024 (1)](https://github.com/Terafora/Sapphy-Doyle-Profile-Site/assets/144109245/9baff3a9-355f-4af5-9c37-11b20c8bbd71)

- The left side has an image of Sapphy Doyle herself showcasing a bit of her personal image and personality to prospective employers. The image isn't finalised as there is a little too much highlighting in the image (and currently I don't have access to the photo editing software to correct this).
- The right hand side holds a short synopsis of Sapphy Doyle and a link which downloads her résumé.

### About

![Screen Recording - Apr 18, 2024 (2)](https://github.com/Terafora/Sapphy-Doyle-Profile-Site/assets/144109245/6682fc34-d728-415e-9457-b08dc78a7d93)

- This page displays a little more information about Sapphy Doyle, and summarises her experiences and skills into a neat package while also letting recuiters know what she's currently doing and what she's aiming to do in the near future.

### Skills

![Screen Recording - Apr 18, 2024 (3)](https://github.com/Terafora/Sapphy-Doyle-Profile-Site/assets/144109245/0f5608dc-6ffd-48bb-b96b-7023047604e6)

- The Skills section includes 10 of Miss Sapphy Doyle's most competent skills which she believes will show employers the kind of person she is and how effective she can be in any work situation.
- The disign of this section uses a row of buttons on the top of the screen with a designated area for skill name and description changing depending on which icon was clicked.
  - On Mobile these icons do not display and the skills and their respective descriptions all display in a list format for easier navigation.

### History

![Screen Recording - Apr 18, 2024 (4)](https://github.com/Terafora/Sapphy-Doyle-Profile-Site/assets/144109245/96e5e4d2-30d2-4cfb-a24b-4217af627850)

- The History section includes all of Miss Sapphy Doyle's previous work history in a similar layout to the Skills section about and includes the:
  - Name and location of the business she worked for.
  - The dates between she worked at the location.
  - Three bullet points about her responsibilities in the role.
 
### Contact

![Screen Recording - Apr 18, 2024 (5)](https://github.com/Terafora/Sapphy-Doyle-Profile-Site/assets/144109245/e678c485-fd93-48f5-b0c9-8ecab7031289)

- The Contact page is the final page and sinply shows two ways in which users can get in contact with Miss Sapphy Doyle.
- The phone number is a purely static item, however the email address when clicked will open a user's email application in another tab and alow them to create an email to Sapphy with her email already present in the address bar.

### Navbar (Component)

- The Navbar component stays fixed while the rest of the content on the page changes when navigating.
- The Navbar leverages the "useLocation" hook to dynamically change the highlighted page to where the user currently is on the site.

## Technologies

- HTML
- CSS/ReactBootStrap
- JavaScript / React / ReactRouter
- Tsparticles
- FramerMotion
- Figma

## Design

- The design for the website was kept somewhat simple so that the navigation of the site for users wouldn't become overly cumbersome and involve to many moving parts. Because of this we decided that it was best to make the site a single application where the navbar would always remain the saim and highlight to users where they currently were on the site.
- Purple was chosen as the primary colour of the site as this was Miss Sapphy Doyle's favourite colour and we thought it would be a way of getting a little but of herself across.
- The background was made using Tsparticles. This allowed to add a more dynamic feel while not being overly distracting to people using the site. To further make sure this was the case the default settings which had mouse movement and clicks interact with the background were removed.
  - As with the colour scheme for the navbar purples were used for the particles in the background, in particular a range of purples were included in an array to be chosen to give a little variance and make the background more interesting. A singular white was used to contrast with the black background and a singular yellow was included to complement the purples used.
- Glass morphism was used for the backgrounds to text to create a break from the moving background and increase readability and further reduce any distractibility that could come with the use of the tsparticles background.
- White text was used throughout the site for consistency and to contrast against the black background to improve readability.
- Framer Motion was used to make it so pages faded in and out more elegantly rather than having components immediately come in and out on button presses.

## Features

- The Navbar component highlights the current page a user is on to prevent confusion on where they are on the site.
- The Home page allows users to download a copy of Miss Sapphy Doyles résumé.
  - The link to download changes colour and visually shows that the CV has been downloaded.
  - a banner also appears to confirm that the download has occurred on the page.
- The Skills and History pages use a set of icons on desktop displays for users to click and display the details of each item at a time.
- The Contact page allows for users to click the email link and open up a new tab ready to send a message to Miss Sapphy Doyle directly.

## Testing

The web application was tested on number of physical and emulated devices to check the functionality of the site.
Other the minor discrepancies the site performed as expected.

## Deployment

The website was deployed using Vercel. There were initially some issues with deployment due to naming conventions previously used with the Navbar component causing conflicts. This was solved with some assistance from Mathew Chaplin.
The live site can be found below:

[Sapphy Doyle's Portfolio Site](https://profile-site-for-sapphy.vercel.app)

## Future Changes

- There are some layout quirks which I'd like to iron out to improve the consitency and general visual language between pages/components.
- The way the Skills and History items are currently displayed is that they're called from within the respective files as variables, however I would like to improve this by seperating the information to their own files and displaying each one via a mapping process.

## Credits

### Tech.

- [Google Fonts]([https://profile-site-for-sapphy.vercel.app/contact](https://fonts.google.com))
- [FontAwesome](https://fontawesome.com)
- [Tsparticles React](https://github.com/tsparticles/react)
- [React-BootStrap](https://react-bootstrap.netlify.app)
- [Framer Motion](https://www.framer.com/motion/)
- [React](https://react.dev)
- [ReactRouter](https://reactrouter.com/en/main)
- [Figma](https://www.figma.com/)

### Images

- Images used from [Unsplash](https://unsplash.com)
  - [Philipp Katzenberger](https://unsplash.com/photos/closeup-photo-of-turned-on-blue-and-white-laptop-computer-iIJrUoeRoCQ)
  - [Jason Goodman](https://unsplash.com/photos/woman-placing-sticky-notes-on-wall-Oalh2MojUuk)
  
## Where to find more of my work 👇

- [LinkedIn](https://www.linkedin.com/in/charlotte-stone-web/)
- [Github](https://github.com/Terafora)
- [Portfolio](https://terafora.github.io/Portfolio-Site/)
