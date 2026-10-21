---
title: "The many faces of GitHub"
toc: TRUE
toc_float: TRUE
header:
  image: /assets/images/spotlights/github_header.png
  image_description: "Hello GitHub."
  caption: "[Gitbanner](https://github.com/mappum/gitbanner) [by Matt Bell](https://github.com/mappum) [on GitHub](https://github.com)"
---

<!--more-->

## What is Git?
Before you can understand what GitHub is, you must first understand the concept of Git:

<body>
<img alt="Git" src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" width="251" height="134" align="right" vspace="10" hspace="20">
<p>Git is <u>distributed version control software</u> for projects, used both individually and in teams. It records project history in a local repository, so you can inspect earlier versions and create commits without an internet connection. Collaborators can exchange commits through a shared remote repository. Git itself does not require a GitHub account.
You can operate Git either in the command line of your operating system or in GitHub Desktop, a Git client with a graphical user interface.
</p></body>

You need to know the following commands when working with Git:
* `git clone [URL]`: clone a Git repository from the URL to your local computer.
* `git init`: Initialize a Git project locally. You can optionally upload this to GitHub or another host later.
* `git add [file]`: Stage the file's current content for the next commit. The staging area (also called the index) holds the changes you have selected. If you edit the file again, run `git add` again to stage the newer content.
* `git commit`: Record the staged changes in the local repository. A commit creates a point in the project history that you can inspect or return to later.
* `git push origin [branch]`: Send the commits needed to update the named branch on the remote called `origin`. This shares committed work; unstaged or staged changes that have not been committed are not uploaded.
* `git fetch origin`: Download commits and update remote-tracking references such as `origin/main`. Fetching alone does not integrate these changes into your current local branch or change its working files; you can review them before integration.

For more detail, see [Git's introduction to version control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) and the documentation for [`git add`](https://git-scm.com/docs/git-add), [`git push`](https://git-scm.com/docs/git-push) and [`git fetch`](https://git-scm.com/docs/git-fetch).

## What is GitHub? {#what-is-github}
<body>
<img alt="" src="{{ "/assets/images/spotlights/octocat.png" | relative_url }}" width="251" height="134" align="right" vspace="10" hspace="20">
<p>GitHub is the host for your Git projects and has similar features to a social network.
<ul><li>You can use Git to access your projects stored in GitHub from anywhere.</li>
    <li>GitHub repositories can be public or private. Public repositories can be viewed by anyone; access to private repositories is restricted to people with permission. GitHub Free includes unlimited public and private repositories, although some features and usage allowances depend on the plan. See <a href="https://docs.github.com/en/get-started/learning-about-github/githubs-plans">GitHub's current plans</a>.</li>
    <li>You can also contribute to existing programs by fixing bugs and thus actively contribute to open source tools.</li>
    <li>GitHub is largely used for large projects in certain programming languages. However, it is just as possible to manage simple documents in GitHub.</li>
</ul></p></body>


**If you want a visualization of how GitHub works let's see how Eddie and his team use GitHub:**
<iframe title="Video: how a team uses GitHub" width="560" height="315" src="https://www.youtube-nocookie.com/embed/w3jLJU7DT5E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

**Difference between GitHub and Git in a nutshell** <br>
* Git is a distributed version control system. It supports local work, branches and collaboration through shared repositories.
* GitHub hosts Git repositories and adds collaboration tools such as issues, pull requests and code review.


| <img alt="Git" src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" height="70px" width="70px"> |  <img alt="GitHub Octocat" src="{{ "/assets/images/spotlights/octocat.png" | relative_url }}" height="70px" width="70px"> <img alt="GitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="70px" width="70px"> |
|---------|-------|
| Version control software | A repository hosting and collaboration service |
| Runs locally, including on computers used as Git servers | Provides hosted remote repositories and web tools |
| Can be used through the command line or graphical clients | Can be accessed through Git, the website or clients such as GitHub Desktop |
| Records commits and manages branches in a repository | Hosts shared repositories and supports issues, pull requests and code review |


## Setting up Git and GitHub {#setting-up-git-and-github}
Before you can get started with Git and GitHub, you need a GitHub account and you need to install Git locally. Here's how:

* First, create an account on [GitHub](https://github.com/). This is pretty straightforward and done quickly without any pitfalls.
* To use GitHub productively, you need Git on your local computer. [Install Git](https://git-scm.com/downloads): Choose the installer you need for your operating system.
* On Windows, launch the **Git Bash** you just installed. On macOS and Linux start the normal terminal.
* With `git config --global user.name "[Name]"` you now have to set your name.
* As with your name, set your email address using `git config --global user.email "[Mail]"`. Use the email address associated with your GitHub account.

## GitHub Tutorial: Setting up a repository {#github-tutorial-setting-up-a-repository}
If you want to get started with a project, you can create a repository in two ways:

*First:*
* To create a new repository on the GitHub page click on the **`+`** next to your profile picture on the top right corner.
* Give your project a name and choose **Public** or **Private** visibility. Private repositories are available with GitHub Free; choose the visibility appropriate for your project.
* Then click on the `Create repository` button. You can then add the repository locally using git clone as described above.

*Second:*
* Locally, create a repository with `git init` and make an initial commit after staging your files. Separately, create an empty repository on GitHub, without adding a README, licence or `.gitignore` there.
* Connect the local repository to that existing remote with `git remote add origin https://github.com/[username]/[projectname].git`. This command records the remote address locally; it does not create a repository on GitHub.
* Share your committed work with `git push -u origin [branch-name]`, replacing `[branch-name]` with your current branch name (shown by `git branch --show-current`). GitHub authentication is required. The push uploads your commits to the repository you created.

See GitHub's instructions for [creating a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) and Git's documentation for [`git remote add`](https://git-scm.com/docs/git-remote).

**For a guided installation and setup, watch *Git & GitHub Crash Course For Beginners* from [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA).**
<iframe title="Video: Git and GitHub Crash Course for Beginners" width="560" height="315" src="https://www.youtube-nocookie.com/embed/SWYqp7iY_Tc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## GitHub Desktop
Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow. GitHub Desktop will allow us to easily start using version control by offering a Graphical User Interface (GUI) to use Git. A GUI allows users to interact with a program using a visual interface rather than relying on text commands.

{% include figure image_path="/assets/images/spotlights/gh_d8.png" caption="GitHub Desktop interface used in this tutorial (existing course screenshot)." alt="GitHub Desktop Changes view: changed files on the left, a diff on the right, and commit summary and commit button below the file list." %}

__Step by Step introduction to GitHub Desktop:__

**1.** Download [GitHub Desktop](https://desktop.github.com/)
{% include figure image_path="assets/images/spotlights/gh_d0.png" caption="Download GitHub Desktop." alt="GitHub Desktop download page, with the Windows download button above an application preview." %}

**2.** Log in to GitHub Desktop to connect to your GitHub account.
{% include figure image_path="assets/images/spotlights/gh_d1.png" caption="Sign in to GitHub Desktop 1/4." alt="GitHub Desktop welcome screen: choose Sign in to GitHub.com to connect an account." %}
{% include figure image_path="assets/images/spotlights/gh_d2.png" caption="Sign in to GitHub Desktop 2/4." alt="GitHub.com sign-in form in GitHub Desktop with username or email, password and Sign in controls." %}
{% include figure image_path="assets/images/spotlights/gh_d3.png" caption="Sign in to GitHub Desktop 3/4." alt="Configure Git screen in GitHub Desktop: enter the name and email recorded in commits, then choose Continue." %}
{% include figure image_path="assets/images/spotlights/gh_d4.png" caption="Sign in to GitHub Desktop 4/4." alt="GitHub Desktop usage-statistics preference and Finish button at the end of setup." %}


**3.** So far there is no Local Repository on your computer.
{% include figure image_path="assets/images/spotlights/gh_d5.png" caption="No local Repositories available." alt="Empty GitHub Desktop window offering to create, add or clone a repository." %}

**4.** First, you should choose an __empty__ folder to store the local data. For example `C:/GITHUB/`. <br> Second, select a repository you created on GitHub to clone a version in your local computer and you will see a local repository.
{% include figure image_path="assets/images/spotlights/gh_d6.png" caption="Cloning an existing repository 1/2." alt="GitHub Desktop File menu with Clone repository selected." %}
{% include figure image_path="assets/images/spotlights/gh_d7.png" caption="Cloning an existing repository 2/3." alt="Clone a repository dialog: select the remote repository and local destination, then choose Clone." %}


**5.** Copy some .txt files to the local repository on your computer. GitHub Desktop shows the changes. Select the files or changes you want to include, enter a commit summary (mandatory) and an optional description, then click `commit`. This records a local commit; use the publish or push action in the next step to share it on GitHub.
{% include figure image_path="assets/images/spotlights/gh_d8.png" caption="Selecting changes and creating a local commit in GitHub Desktop." alt="GitHub Desktop Changes view: changed files on the left, a diff on the right, and commit summary and commit button below the file list." %}

**6.** For a branch that is not yet on GitHub, click `Publish branch`; for an already published branch, use `Push origin` to share new local commits. Your local branch and its corresponding remote branch can contain different commits. Use `Fetch origin` to check for remote updates. Fetching alone does not integrate them into your local branch. If updates are available, Desktop offers `Pull origin` to integrate them; resolve any conflicts before continuing. See the official instructions for [pushing changes with GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop).
{% include figure image_path="assets/images/spotlights/gh_d9.png" caption="Sharing commits with the remote repository." alt="GitHub Desktop toolbar highlighting Publish branch for sharing the local branch with the remote repository." %}

Further Information on: [Activity: Use the GitHub Desktop client](https://idratherbewriting.com/learnapidoc/pubapis_github_desktop_client.html)


**GitHub Desktop introduction** *A quick intro for GitHub Desktop on Windows:*
<iframe title="Video: introduction to GitHub Desktop on Windows" width="560" height="315" src="https://www.youtube-nocookie.com/embed/77W2JSL7-r8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Git Bash Console
Git provides a BASH emulation used to run Git from the command line. Simply right-click on a folder in Windows Explorer to access the BASH or GUI. Bash is an acronym for "Bourne Again Shell". A shell is a terminal application that interfaces with an operating system through written commands. *NIX users should feel right at home, as the BASH emulation behaves just like the "git" command in LINUX and UNIX environments.

| Command | Description |
| --------|-------------|
| **Getting & Creating Projects** |
| `git init` | Initialize a local Git repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |
| **Basics** |
| `git status` | Check status |
| `git add [file-name.txt]` | Add a file to the staging area |
| `git add -A` | Stage all added, modified and deleted files |
| `git commit -m "[commit message]"` | Commit changes |
| `git rm -r [file-name.txt]` | Remove a file (or folder) |
| **Sharing & Updating Projects** |
| `git push origin [branch name]` | Push a branch to your remote repository |
| `git push -u origin [branch name]` | Push changes to remote repository (and remember the branch) |
| `git push` | Push changes to remote repository (remembered branch) |
| `git pull` | Fetch and integrate changes from the configured upstream branch (by merging or rebasing, depending on configuration) |
| `git pull origin [branch name]` | Fetch the named remote branch and integrate it into the current local branch |
| **Inspection & Comparison**  |
| `git log` | View changes |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff [source branch] [target branch]` | Preview changes before merging |

<br>

**Git Bash introduction** *How to upload files to github from Git Bash on Windows from scratch* from [Amarindaz](https://www.youtube.com/channel/UCLMQ_EJIZ-OBNYFKr__JRuA)
<iframe title="Video: uploading files with Git Bash on Windows" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2vASHVT0qKc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
---
<br>

## GitHub in RStudio {#github-in-rstudio}
Once you've installed Git, you'll need to activate it on your system by following these steps:

_Part 1_ <br>
**Tell RStudio where to find the Git installation**
* Open RStudio and go to Tools > Global Options… click on Git/SVN
* Check Enable version control interface for RStudio projects
* Set the path to the Git executable that you just installed. Open a shell, if you don’t know where Git is installed.
* Windows: type where git and hit enter. The path should be something like: C:/Program Files (x86)/Git/bin/git.exe
* Linux/OS X: type which git and hit enter. The path should be something like: /usr/bin/git
* Restart RStudio, if it worked out you will find the Git icon on the top toolbar, as shown below.

{% include figure image_path="assets/images/spotlights/git_rstudio.png" caption="Git in RStudio." alt="RStudio Global Options, Git/SVN panel, with the path to the Git executable and an SSH-key field." %}

**Setup Git** <br>
Configure Git and set your user name and email (the email address you used to register on GitHub). You can directly open the Git prompt from within RStudio. User name and email need to be set only once. Go to Tools > Shell to open the Git Shell to tell Git your username and GitHub email.

`git config --global user.name 'yourGitHubUsername'
git config --global user.email 'name@provider.com'`

{% include figure image_path="assets/images/spotlights/git_rstudio2.png" caption="Git in RStudio." alt="RStudio Tools menu with Shell selected, opening a terminal in the project directory." %}

_Part 2_ <br>
**Create a new RStudio project with Git**

There are three ways to create version control for a RStudio project.

**a)** Create a new project and create a local Git repository: <br>
Select _File > New Project.._, create a project from a _New Directory_ and check the option _Create a git repository_. In order to push to a remote repository later on you add that remote repository by using the Git shell. If you already know which online repository you want to use for your projects, option c) is more convenient.

**b)** Create a new project from a folder under version control: <br>
In this case you only need to create a new RStudio project for that directory and version control is automatically enabled. Go to _File > New Project_, select create a new project from an _Existing Directory_ and create the project.

**c)** Create a new project based on a remote Git repository: <br>
Select _File > New Project.._ and from the opening menu select to create a new project from _Version Control_, choose _Git_, then provide the repository url (use the https link of the url if you want to avoid all the ssh trouble) from the repository you want to clone and create the project.

{% include figure image_path="assets/images/spotlights/git_rstudio4.gif" caption="Git in RStudio." alt="Animation of creating an RStudio project from a Git repository: choose Version Control and Git, enter the repository URL and local directory, then create the project." %}

To create a new Git based project in RStudio, we need the repository url. You find the repository HTTPS url on the just created GitHub project page. There press the button Clone or download and copy the HTTPS link of the project by clicking the little icon to the right of the URL. The link will be something like `https://github.com/yourusername/rstudio-git-test.git`

{% include figure image_path="assets/images/spotlights/git_rstudio3.png" caption="Git in RStudio." alt="GitHub Clone or download menu showing the HTTPS repository URL to copy into RStudio." %}

---

That's it. All you need to know about Git, Git Desktop, GitHub, Git Bash and Git integration in RStudio.

{% include figure image_path="/assets/images/spotlights/github_austinpowers.jpg" caption="Live dangerously." alt="Austin Powers meme joking that committing without first pulling remote updates is living dangerously." %}

See you in the next Spotlight *Introduction to CSS in R Markdown*.

<!--
## Further reading

add some day
-->
