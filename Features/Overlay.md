# Overlay
<pre>                                   Desktop View                                                            Mobile View             </pre>
<img src="" width="700" height="420">..............<img src="" width="250" height="420">

<p>&nbsp;</p>
**Following properties of the Overlay can be customized as per individual requirements**
<p>&nbsp;</p>

**overlayStyle** - Background image of the overlay can be changed by passing image URL in the 'imgUrl' field. Background color of the overlay can be changed by passing the color value (rgb, hexadecimal or keyword) in the 'backgroundColor' field.

![image](https://user-images.githubusercontent.com/101316657/165915798-358673bc-195d-4b36-9973-5c02bdd1a812.png)


**autohide** - This property lets us enable or disable whether to auto hide the template after certain time period. This can be done by passing in "yes" in the 'activator' field to enable and leaving it as blank to disable. 'countDown' can be set to "yes" and text can be added in the 'countDownText' field, as can be seen in above image. The time can be set in seconds in 'time' field.

![image](https://user-images.githubusercontent.com/101316657/165223833-4dfb6790-3a3a-47bf-b7bf-54c2887a4719.png)


**closeButton** - Close button to close the banner can be enabled by setting the value to 'yes' in the 'activator' field and leaving it as blank to disable. An image can be used as close button icon by passing its url in 'imageUrl field'.

![image](https://user-images.githubusercontent.com/101316657/165223867-12d81938-8eae-42bf-b0a5-c9a4563f2c61.png)

**borderStyle** - The border of the banner can be customized by changing the color (rgb, hexadecimal or keyword) in 'color' field, border type (solid, dashed etc) in 'style' field and width (in pixels) by passing in values in 'width' field.

![image](https://user-images.githubusercontent.com/101316657/165223930-d038f2c5-4c64-43f9-b922-dbe4113a9d0a.png)

**heading**- Title text can be added in 'text' field with character limit of 30 characters. Font size of the title in pixels, for desktop and mobile can be specified in 'fontSizeDesktop' and 'fontSizeMobile' fields. Color can be set in 'color' field and font family can be set in 'fontFamily' field.

![image](https://user-images.githubusercontent.com/101316657/165223947-c72162a6-08bd-4341-9039-841e122bd5cd.png)

**message** - Message text can be added in 'text' field with character limit of 50 characters. Font size of the title in pixels, for desktop and mobile can be specified in 'fontSizeDesktop' and 'fontSizeMobile' fields. Color can be set in 'color' field and font family can be set in 'fontFamily' field.

![image](https://user-images.githubusercontent.com/101316657/165223975-1d5ca4b7-7736-4f1f-81cd-4d1262f1b36f.png)

**ctaNo** - Number of CTAs can be set to either one or two depending on the value passed in 'singleCTA' field. Passing 'none' would show two buttons and leaving it as blank will show one button.

![image](https://user-images.githubusercontent.com/101316657/165223996-b5210148-c8b8-4732-b7d5-a0cd5c6075f5.png)

**ctaLink1 and ctaLink2** - CTA text can be added in 'text' field with character limit of 20 characters. The link to navigate when user clicks on CTA can be provided in 'href' field. Font size in pixels can be set in 'fontSize' field. Background color can be set in 'backgroundColor' field. Text color can be set in 'textColor' field. Border radius, ie the extend of curve in CTA's edges can be set in 'borderRadius' field and font family can be set in 'fontFamily' field.

![image](https://user-images.githubusercontent.com/101316657/165224014-9da81f33-6a8b-4320-bc3b-9a18966bf3f9.png)

**subHeading** - Three subheadings are available which can be enabled by setting the value of 'activator' field to yes and leaving it as blank to disable. CTA text can be added in 'subHeading1Text' field with character limit of 20 characters. The link to navigate when user clicks on the subheading can be provided in 'subHeading1Href' field. Similar for other subHeadings. Font size in pixels can be set in 'fontSize' field. Text color can be set in 'textColor' field and font family can be set in 'fontFamily' field.

![image](https://user-images.githubusercontent.com/101316657/165224039-ec87b3a8-a193-4232-8186-4d2ac4501f26.png)

**logoImage** - This can be enabled by setting the value of 'activator' field to yes and leaving it as blank to disable. Image url can be passed in 'url' field. Width of the logo can be specified for large screen, medium screen and small screen in pixels by passing the values in 'largeScreenLogoWidth', 'mediumScreenLogoWidth' and 'smallScreenLogoWidth' respectively.

![image](https://user-images.githubusercontent.com/101316657/165224065-ece24371-af07-41c1-ac3e-8486a5e58aa1.png)

**animation** - This can be enabled by setting the value of 'activator' field to yes and leaving it as blank to disable. Subtle animations like bounce, fade, swing and slide can be set 'animationType' which will animate the banner to make it bounce, fade, swing  or slide from top. Additionally, fade in and fade out time for fade animation can be set in 'fadeInTime' and 'fadeOutTime' fields by passing values in miliseconds, or simply specifying as 'slow' or 'fast'.

![image](https://user-images.githubusercontent.com/101316657/165224083-942505df-f1df-42f0-99db-4a66f6e5c442.png)
