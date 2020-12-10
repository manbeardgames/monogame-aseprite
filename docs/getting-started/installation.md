---
id: installation
title: Installation
sidebar_label: Installation
---

This serves to document how to download and add the **MonoGame.Aseprite** library to your project.

## Prerequisites
* [MonoGame 3.8](https://www.monogame.net/downloads/)
* [A MonoGame project](https://docs.monogame.net/articles/getting_started/2_creating_a_new_project_vs.html)

:::note

Support for MonoGame 3.7 has ended with the current version of MonoGame.Aseprite.

:::

## Downloading
**Monogame.Aseprite** is distributed via a NuGet package.  You can add the NuGet package to your project from within your IDE, such as the NuGet Package Manger in Visual Studio.  Just search for [MonoGame.Aseprite](https://www.nuget.org/packages/MonoGame.Aseprite/)

Or if you prefer to add it using a command line interface, you can do one of the following

**Package Manager CLI**  
```Install-Package MonoGame.Aseprite -Version 2.0.0-beta```

**.NET CLI**  
```dotnet add package MonoGame.Aseprite --version 2.0.0-beta```

Installing the package does two things.

1. First, it downloads `MonoGame.Aseprite.dll` and `MonoGame.Aseprite.ContentPipeline.dll`.  
2. Second, it automatically adds a reference in your project for `MonoGame.Aseprite`.

After installing the NuGet package, we need to add the content pipeline reference manually.

## Adding Content Pipeline Reference
When the NuGet package is installed, it includes the `MonoGame.Aseprite.ContentPipeline.dll` file. If your NuGet packages are installed in the default location on you system, then the file path should be

:::note

NuGet, by default, will install the package files in the following location

```
C:\Users\[User]\.nuget\pacakages\monogame-aseprite\[Version]\contentFiles\netstandard2.0\MonoGame.Aseprite.ContentPipeline.dll
```

Where **[User]** is your username and **[Version]** is the version number of the MonoGame.Aseprite package.

:::

To add the `MonoGame.Aseprite.ContentPipeline.dll` as a reference to the content pipeline, you can do this either using the Content Pipeline Tool or by editing the Content file directly.  Both ways are provided below.

### Content Pipeline Tool
To add the refernce using the Content Pipeline Tool:

1. Open your projects `Content.mgcb` file using the **Monogame Content Pipeline Tool**
2. Click on the **Content** node in the **Project** panel
3. Scroll down in the **Properties** panel and click to edit the **References** field
4. In the **Reference Editor** window that opens, click the **Add** button
5. Navigate to the location of the `MonoGame.Aseprite.ContentPipeline.dll` file as mentioned above and select it to add it.

### Editing Content File Directly
To add the reference by editing the content file directly:

1. Open your projects `Content.mbcb` file in a text editor
2. Locate the `References` section and edit it to include the path to the `MonoGame.Aseprite.ContentPipeline.dll` file as shown below

```
#-------------------------------- References --------------------------------#

/reference:C:\Users\[User]\.nuget\packages\monogame.aseprite\[Version]\contentFiles\netstandard2.0
```

## Conclusion
That's it, if you completed the above steps, you're good to go. Next step would be read about [importing an aseprite file using the MGCB Editor](getting-started/importing-aseprite-file.md).