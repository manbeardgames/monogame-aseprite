---
id: introduction
title: MonoGame.Aseprite
sidebar_label: Introduction
slug: /
---

![](https://raw.githubusercontent.com/manbeardgames/monogame-aseprite/gh-pages-develop/static/img/monogame_aseprite_banner_800_200.png)

MonoGame.Aseprite is an extension for the [MonoGame Framework](https://www.monogame.net) that allows you to import [Aseprite](https://www.aseprite.org) \*.ase/\*.aseprite files into your game project using the MGCB Editor (also known as the Content Pipeline Tool).

No need to export a sprite sheet from Aseprite and have to deal with a PNG image file and a JSON file. With MonoGame.Aseprite the import process takes the single Aseprite file and generates a `AsepriteDocument` object, containing a `Texture2D` generated sprite sheet and all the data you need to animate those sweet pixels in game.

MonoGame.Aseprite also provides an out-of-the-box AnimatedSprite class that can be used with the imported `AsepriteDocument` to get you started quickly if you prefer this as well.


## Getting Started
* For **MonoGame 3.7.1** (.NET Framework >= 4.5) users, please refer to the [installation documentation here](getting-started/monogame37installation).
* For **MonoGame 3.8** (.NET Core) users, please refer to the [installation documentation here](getting-started/monogame38installation).

## Example Usage
The following is a quick example of using MonoGame.Aseprite in your game.

**Add Using Statements**
```csharp
//  Add using statements
using MonoGame.Aseprite.Documents;
using MonoGame.Aseprite.Graphics;
```

**Load the Content**
```csharp
//  Load the AsepriteDocument
AsepriteDocument aseDoc = Content.Load<AsepriteDocument>("myAseFile");

//  Create a new AnimatedSprite from the document
AnimatedSprite sprite = new AnimatedSprite(aseDoc);

```

**Update the AnimatedSprite Instance**
```csharp
sprite.Update(gameTime);
```

**Drawing the AnimatedSprite**
```csharp
sprite.Render(spriteBatch);
```


## What Next?
* Read the [documentation](https://manbeardgames.com/monogame-aseprite).
* Join the [Discord](https://discord.gg/8jFvHhuMJU) to ask questions or keep up to date.
* Submit an [issue on GitHub](https://github.com/manbeardgames/monogame-aseprite/issues).
* Follow me on [Twitter @manbeardgames](https://www.twitter.com/manbeardgames).


## Sponsor On GitHub
[![](/img/github_sponsor.png)](https://github.com/sponsors/manbeardgames)
 Hi, my name is Christopher Whitley. I am an indie game developer and game development tool developer. I create tools primary for the MonoGame framework. All of the tools I develop are released as free and open-sourced software (FOSS), just like this **Monogame.Aseprite** library.

 If you'd like to buy me a cup of coffee or just sponsor me and my projects in general, you can do so on [GitHub Sponsors](https://github.com/sponsors/manbeardgames).  

