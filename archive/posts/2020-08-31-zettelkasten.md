---
layout: post
title: 'How I use zettelkästen'
description: 'A short account of the way I use neuron to keep notes using the zettelkästen method.'
category: 'blog'
tags: ['thoughts', 'organization']
author: jerem.
---

# What is a *zettelkästen* ?

Keeping track of all the thoughts and ideas than come up during one day can be, though. When I am working or reading a book, or simply having a walk, I often have ideas that come and go, and the feeling that I should do something to hold them. Keeping a notebook is a good technique and one that I have tried many times, but I could never really stick to it, for some reason. It never felt right to keep everything in a single notebook, and keeping one for every subject can quickly become cumbersome. Also, taking a note is one thing, another is to find a way to access it when you need to. Having all your note stored sequentially in chronological order does not really permit that.

It is for these reasons that I recently got interested in the method known as *Zettelkästen*, in the mother tongue of its inventor [Niklas Luhmann](https://en.wikipedia.org/wiki/Niklas_Luhmann). His method, whose name could translate to *slip box* or simply *note box* seems to have received a lot of attention lately, in spite of the disappearance of its inventor in 1998. It even developed into a sort of online cult following with its own [website](https://zettelkasten.de/), [subreddit](https://www.reddit.com/r/Zettelkasten/) and a series of dedicated software. 

Niklas Luhmann conceived his system to help him in his work as a sociology professor. In [an essay](http://luhmann.surge.sh/communicating-with-slip-boxes) on the subject, he describes how his own zettelkästen became an indispensable partner in his research. Regarding his system of storage, he writes:

> A system based on content (like the outline of a book) would mean that we make a decision that would bind us to a certain order for decades in advance! **This necessarily leads very quickly to problems of placement, if we consider the system of communication and ourselves as capable of development**. The fixed filing place needs no system. It is sufficient that we give every slip a number which is easily seen (in or case on the left of the first line) and that we never change this number and thus the fixed place of the slip.

In his time, Luhmann had to use a solid concrete cabinet to store his note. And with that came the constraint of having to assign a fixed place to every card. This was best done by giving every card a unique identity number. This number did not have to be identified in advance with any kind of topic. It was only meant as a permanent reference for the content on the card which could then be used in other contexts. 

<figure style="display: block; margin-left: auto; margin-right: auto;"class="md:w-2/3 mb-2 items-center text-center">
  <img src="/images/posts_data/zettelkasten/zettelkasten.jpg" alt="Luhmann’s *zettelkasten* on display">
  <figcaption>Luhmann’s original <i>zettelkasten</i> on display</figcaption>
</figure>

Having the information stored on small cards and having those cards stored in an arbitrary (but permanent!) order instead of being stored by topics, makes the whole system **evolutive** as it is easy to link notes together simply by using their identifiers. This is undoubtedly one of the major advantages of the zettelkästen method as identified by Luhmann. The other advantage being what he described as the possibility of *arbitrary internal branching* depending on the thread of ideas that come to mind when writing.

> A slip with number 57/12 can then be continued with 57/13, etc. At the same time, it can be supplemented at a certain word or thought by 57/12a or 57/12b, etc. Internally, this slip can be complemented by 57/12a1, etc. (...) **In this way, a kind of internal growth (Wachstum nach innen) is made possible, depending on what kind of material for thought occurs.** The disadvantage is that the originally continuous text is often broken up by hundreds of intermediate slips. But if we systematically number the papers, we can find the original textual whole easily.

Now, with the development of the home computer and laptop, we do not have to deal with the same constraints experienced by Luhmann in his time. Something I will now describe as I show you the software I use to keep my own zettelkästen.

# Neuron

There is a growing number of software to manage a digital zettelkästen. After fooling around with some of them, I have settled for [neuron](https://neuron.zettel.page/). While it is not the most sophisticated, it has the important advantage to be very portable and is meant to be *future-proof* by design. It also comes with a neat interface that is reminiscent of its paper-based ancestor. 

<figure style="display: block; margin-left: auto; margin-right: auto;"class="md:w-2/3 mb-2 items-center text-center">
  <img src="/images/posts_data/zettelkasten/neuron-screenshot.png" alt="neuron preview">
  <figcaption>Preview of a note in <i>neuron</i></figcaption>
</figure>

At its core, neuron is a simple engine that turns a bunch of notes, each one with its own unique *random alphameric identifier* kept within a single folder in your root directory: `~/zettelkasten`, and turns it into a static website to be consulted inside your web browser. It also comes with a number of useful [CLI tools](https://en.wikipedia.org/wiki/Command-line_interface) to [manage your *zettels*](https://neuron.zettel.page/2011502.html). While it is still being developed — and not without its flaws — I find that its simple database structure based on individual (but interconnected) markdown files makes it easily portable in case the support for neuron disappears in the future or I simply wish to manage my zettelkästen using a different software.   

# Neuron.vim

The pleasure of using neuron wouldn't be complete if it weren't for the neat little [vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) plugin called [neuron.vim](https://github.com/ihsanturk/neuron.vim). This allows me to edit and link my notes together without leaving the editor using a simple [set of commands](https://github.com/ihsanturk/neuron.vim/blob/master/README.md#default-mappings)    

For example, if as I am writing this post I have an idea that I want to keep in a zettel for later, I just need to type `gzn` in normal mode to automatically create a new file with its own unique *id* in my zettelkästen directory with the date inside the [YAML front-matter](https://en.wikipedia.org/wiki/YAML) and the cursor ready to type in.

<figure style="display: block; margin-left: auto; margin-right: auto;"class="md:w-2/3 mb-2 items-center text-center">
  <img src="/images/posts_data/zettelkasten/neuronvim-gzn.png" alt="neuron preview">
  <figcaption>A new zettle using <i>neuron.vim</i></figcaption>
</figure>

But the coolest thing is the way you can search for a note and insert it into the editor on the fly using `gzi`

<figure style="display: block; margin-left: auto; margin-right: auto;"class="md:w-2/3 mb-2 items-center text-center">
  <img src="/images/posts_data/zettelkasten/neuronvim-gzi.png" alt="neuron preview">
  <figcaption>Inserting a link to an existing zettel with <i>neuron.vim</i></figcaption>
</figure>

And the icing on the cake, if you are a [neovim](https://neovim.io/) user, the plugin automatically displays the title of the zettel at the end of the line containing its *id* number. 

<figure style="display: block; margin-left: auto; margin-right: auto;"class="md:w-2/3 mb-2 items-center text-center">
  <img src="/images/posts_data/zettelkasten/neuronvim-preview.png" alt="neuron preview">
  <figcaption>Preview of a title using <i>neuron.vim</i> with neovim</figcaption>
</figure>

# Conclusion

I do not want to make this post too long. I am still at the beginning of my experimentation with zettelkästen. If you have found this post interesting, I encourage you to read more details in the links above. If you are also a proficient vim user, you should take a look at [neuron](https://neuron.zettel.page/) with [neuron.vim](https://github.com/ihsanturk/neuron.vim). There are also equivalent ways to do similar things with [emacs](https://github.com/felko/neuron-mode). In case you do not want to use any of these options, the author of neuron recently released a dedicated web-based dashboard for its own app called [cerveau](https://neuron.zettel.page/041726b3.html) (French for *brain*) that recently entered its open beta stage. Check it out, this is all good stuff !



