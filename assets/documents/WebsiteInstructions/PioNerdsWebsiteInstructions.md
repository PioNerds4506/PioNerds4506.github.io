# **PioNerds 4506 Website Instructions**

## **Introduction**
The [PioNerds 4506 website](www.PioNerds4506.com) is a static website that is deployed and hosted on GitHub, using GitHub Pages and Jekyll.  Using GitHub and Jekyll, allows users to running the website locally before deploying it along with versioning the files associated with the website.

## **Background**
Dynamic websites pull information from a database to fill in the content on a web page.  For example, when you perform a search on a web site, the search results page you are shown didn’t already exist as a full HTML page; instead the web provider has a template for search results page that includes things all results pages share (like a menu, logo, etc.), but it queries the database to insert the results of that search you initiated into that template.

Static websites do not use a database to store information; instead, all information to be displayed on each webpage is already contained in an HTML file for that webpage.  The HTML pages that make up a static site can be completely written by hand, or you can offload some of this work using something like Jekyll.

Jekyll is software that helps “generate” or create a static website.  Jekyll takes page templates – those things like main menus and footers that are shared across all the web pages on your site, where manually writing the HTML to include them on every webpage would be time consuming.  These templates are combined with other files with specific information to generate full HTML pages for website visitors to see. Jekyll doesn’t need to do anything like querying a database and creating a new HTML page (or filling in a partial one) when you visit a webpage; it’s already got the HTML pages fully formed, and it just updates them when/if they ever change.  Jekyll isn’t actually “running” the live website; rather Jekyll is a “static site generator”: it helps create the static site files, which are hosted just as one would any other HTML website.

Because static sites are just text files, we can easily version a static site – that is, use a tool to keep track of different versions of the site over time by tracking how the text files that compose the site have been altered.  Versioning is especially helpful when multiple people work on the website and they need to merge two files (combine two or more versions), or when one wants to compare files to look for differences among them.

GitHub is a visual way to use a system for versioning: keeping track of changes to computer files over time.  GitHub Pages is a free place to store the files that run a website and host that website for people to visit.

## **Setup/Installation**
The following software is needed to allow for versioning, running the website locally and publishing the website:
+ GitHub Desktop
+ Ruby
+ Jekyll
+ Text Editor
  + Windows:  Notepad++, Visual Studio Code
  + Mac: TextWrangler

### **Windows and Mac**
1. Install GitHub Desktop using the installation instructions on the [GitHub Desktop website](https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop)
2. Create PioNerds directory
3. Clone the [PioNerds4506.github.io](https://github.com/PioNerds4506/PioNerds4506.github.io) repository to the PioNerds directory created above
4. Install Jekyll & Ruby using the installation instructions on the [Jekyll website](https://jekyllrb.com/docs/installation/)

## **Directory Structure**

(/assets/documents/WebsiteInstructions/DirectoryStructure.png)

An overview of what each of these does:

| File/Directory | Description |
| --- | --- |
| _config.yml | Stores configuration data.  See https://jekyllrb.com/docs/configuration/ for more details on Jekyll configuration. |
| _includes | There are the partials that can be mixed and matched by the layouts to facilitate reuse.  The liquid tag *{% include file.ext %}* can be used to include the partial in *_includes/file.ext*. |
| _layouts | These are the templates that wrap around your content.  They allow to have the source code for the template in one place so we don’t have to repeat thinks like navigation and footer on every page. |
| _data | Well-formatted site data is placed here.  The Jekyll engine will autoload all data files (using either the *.yml*, *.yaml*, *.json*, *.csv* or *.tsv* formats and extensions) in this directory, and they will be assessible vial ‘site.data’. |
| _site | This is where the generated site will be placed once Jekyll is done transforming it. |
| .jekyll-metadata | This helps Jekyll keep track of which files have not been modified since the site was last build, and which files will need to be regenerated on the next build.  This file will not be included in the generated site. |
| .gitignore | GitHub uses this to determine which file and directories to ignore. |
| CNAME | GitHub custom domain file |
| gemfile | File used for describing Gem dependencies for Ruby programs. |
| gemfile.lock | File used by Ruby to list that what Gems actually installed the last time the Gemfile dependencies were asked to be installed. |
| index.html | Provided that the file has a front matter section, it will be transformed by Jekyll.  This will happen for any *.html* file in the site’s root directory or directories not listed above. |
| Other files/folders | Every other directory and file except for those listed above – such as css and images folders, favicon.ico files, and so forth – will be copied verbatim to the generated site. |
| assets | Directory that contains directories for documents and images that are displayed on the website |
| assets/documents | Directory where .pdf documents are stored for the website.  These include theHandbook, Drive Team and Branding Standards documents. |
| assets/img | Directory where website images are stored. |
| assets/img/sponsors | Directory where sponsor images are stored. |
| assets/season | Directory that contains directories for website images. |
| assets/season/20xx | Directory for photos from that year.  This includes the image of the robot along with any logos specific to that year’s challenge. |
| assets/season/20xx/photos | Contains directories of specific events team was involved in that year. |
| assets/season/20xx/photos/event | Directory of photos from a particular event (Build Season, Regional, Zero Day, etc.). |
| assets/season/20xx/publicity | Directory where images from any publicity the team received that year (newspaper article, TV, etc.). |
| assets/season/20xx/videos | Directory where video preview images are stored. |
| css | Contains all the css files for the web site.  The names of each of the files corresponds to the name of the HTML it pertains to. |
| firstlegoleague | Contains logos, image and other documents for the First Lego League page. |
| firstrobotics | Contains HTML pages for each FRC year along with a template that can be used for future years. |
| firsttechchallenge | Contains logos, image and other documents for the First Tech Challenge page. |
| js | Contains JavaScript files used by the website. |
| photos | Contains HTML pages for each of the event photo web page. |


## **Website Constraints**
Static websites do not have the ability to host videos.  So to post videos, the videos need to be posted on the [PioNerds YouTube channel](https://www.youtube.com/channel/UCsqC-czEqR8hNiAR6NpQAkg) and embed them within the web page.

For websites to load quickly, the size of the content needs to be a small as possible.  For pictures to load quickly, their size should be less than 1000 KB, preferably in the 500 KB range.  When digital cameras are set up to take quality pictures, the resulting file sizes can be 4 to 6 GB.  Pictures need to be reduced before being placed on the website. Photo sizes can be reduced using on online resourse like [tinyjpg](https://tinyjpg.com).

Note: Links and file names are case sensitive, so be sure the names are correct, or the web page will not display correctly.  For example, if a name of a photo is TeamPhoto.JPG, but  in the HTML file, it is TeamPhoto.jpg, it will not be displayed.

## **Maintain/Update Website**

### &nbsp;&nbsp;&nbsp;**Add Sponsor**
1. Copy the Sponsors logo (.jpg or .png) file to the assets/img/sponsors directory
2. Edit the sponsors.html page and add the logo at the appropriate sponsorship level
3. If the sponsor is a Diamond, Platinum or Gold sponsor, add them to the home page by editing the _layouts/default.html page and add the logo in the Sponsors section

### &nbsp;&nbsp;&nbsp;**Create New Season Page**
1. Create folder for new season in the assets/season folder.  The name of the folder is the year of the competition (e.g. /assets/season/2020).
2. Place a copy of the full color logo of the competition in the folder created above.  This can be found on the [FIRST FRC Game & Season Material website](https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system) under the Game Specific Material section
3. Place a picture of the robot in the folder created above.
4. In the /firstrobotics folder, make a copy of the frcTemplate.html file and rename it (e.g. frc2020.html for the 2020 season).
5. Edit the newly created file and replace all the XXXX with the year and XXX text with appropriate content.
6. Add new season page to firstrobotics.html page.
   + Copy the previous season block-level element and update the year, season description, and link to newly created season page

### &nbsp;&nbsp;&nbsp;**Add Event Photos**
1. If photos are larger than 1000 KB, reduce the size
   1. Photo sizes can be reduced using [tinyjpg](https://tinyjpg.com/)
2. Create folder for event photos in the assets/season/20xx/photos/event folder<br>For example, the 2020 Build Season photos should be placed in the /assets/season/2020/photos/ZeroDay folder
3. Copy photos to the appropriate event photo directory
4. Create the event photo page
   1. Make a copy of the 20xxEventPhotosTemplate.html file in the photos directory and rename it (e.g. 2020BuildSeasonPhotos.html)
   2. Edit the file above to add event name and photos
      1. Change 20xx Event Name in the h2 heading block
      2. Update path and photo name for each photo and add/remove as needed
5. Add event photo page to the photos.html page
   1. Edit photos.html page and add appropriate rows as needed.  Copy existing format. Be sure to update the page link, link title and link image file.
      1. If adding a new year, copy entire photoGalleryLinks block-level element and edit
      2. if adding a new event to current year copy entire photoGalleryLinkContainer block-level element and edit.<br>Note: The link image file may need to be resized

### &nbsp;&nbsp;&nbsp;**Add Event Vidoes**
1. Upload video to PioNerds4506 YouTube website
   1. Take note of the video name
2.	Create link image file from video and place in the assets/season/20xx/videos folder
3.	Add video link and link image file to the videos.html page. Copy existing format. Be sure to update the video link image, video title and video name.
   1. If adding a new year, copy the entire videoGalleryLInks block-level element and edit
   2. If adding a new video to current year, copy entire videoGalleryLinkContainer block-level element and edit.

### &nbsp;&nbsp;&nbsp;**Run Website Locally**
1. In a command window/terminal (Mac) run the following from the website repository root: <br>&nbsp;&nbsp;&nbsp;bundle exec Jekyll server --watch
2. Open a browser and go to: <br>&nbsp;&nbsp;&nbsp;http://localhost:4000 <br>Note: with the --watch option, any changes made will cause a recompile and you will need to refresh the website in your browser to see the changes
3. To stop the local server, type ctrl-C in the command window/terminal

### &nbsp;&nbsp;&nbsp;**Publish Changes**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once all changes have been verified, the changes can be published.
1. If photos were added:
    1. Commit a small number of photos (up to 20) to local repository
    2. Push committed changes up to web repository
    3. Repeat until all photos are pushed to web repository
2. Commit remaining changes to html files to local repository
3. Push committed changes to the web repository
4. Wait a few minutes and then verify changes on web page

## **References**
A Guide to Creating and Hosting a Personal Website on GitHub (<http://jmcglone.com/guides/github-pages>) by Jonathan McGlone

Jekyll (<https://jekyllrb.com/>)

GitHub Desktop (<https://desktop.github.com/>)

Tinyjpg <https://tinyjpg.com>

W3schools (<https://www.w3schools.com/>)

Use a Static Site Generator to Build a Quick Website (<https://www.makeuseof.com/tag/static-site-generator-build-website/>) by Aaron Peters

Building a static website with Jekyll and GitHub Pages (<https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages>) by Amanda Visconti

Setting up your GitHub Pages site locally with Jekyll (<https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/>)
