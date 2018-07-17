---
category: "The Tangle Blog"
cover: ""
slug: '/blog/connected-notebook'
date: '2018-07-06'
title: 'The Connected Notebook'
subtitle: 'This post originally appeared on praxis.fortelabs.co'
author: 'Myles McGinley'
tags: ['Tangle', 'Connected', 'Demo']
---

### Do your notes generate ideas?

There is a connectivity problem with today’s digital notebooks.

As Tiago explains in [P.A.R.A. III: Building an Idea Generator](https://praxis.fortelabs.co/p-a-r-a-iii-building-an-idea-generator-400347ef3bb6/), organizational methods for retrieving ideas from note-taking applications rely on imposing structure. A structure is necessary because of the hierarchical nature of knowledge management software, namely note-taking apps. Maintaining the proper hierarchy is burdensome, yet failure to do so reduces, if not eliminates, your notes’ future value. Impose too much order, however, and you’ll reduce the opportunity for the serendipitous connections that make you creative and help generate new ideas.

Tiago and his team identified this problem and took action. They developed [RandomNote](https://gitlab.com/fortelabs/evernote-random), an application that adds randomness into your workflow by retrieving, as its name suggests, a random note from Evernote when you click it.

The app *“allows notes in different notebooks to encounter each other,”* helping to shine light on unidentified connections and revealing new ideas. RandomNote is a great hack for those moments you feel “stuck” on something.

RandomNote is undoubtedly an effective tool, but look closer and you’ll find it suggests much larger questions about current note-taking software. Why should we rely solely on serendipity and luck to inspire connections and resurface old thoughts? What if we could make connection more *purposeful*? We are building Tangle to do just that.

**Tangle is a complete overhaul of traditional note-taking technology that puts principles of discoverability and connectivity first.** To accomplish this, we have rethought the data structure of current digital note-taking tools. Instead of using a hierarchical structure, **Tangle uses one built for connection: a graph.**

The graph database enables Tangle to be a **connection-first notebook** that elevates idea generation and enhances the creative process.

### What is a graph?

Graphs are great for modeling data that have many *relationships*. Graphs contain two types of data: nodes and edges. A node is something like a person, company, or city. Nodes are described with properties and labels, and they are relatable in some way to another node. Edges represent those relationships. They are described with unique properties.

> Nodes are *things* that are relatable. Edges are *relationships* between them.

Take the following example:

Two *Giraffes*, **Edward and Norton**, are friends. Both **Edward** and **Norton** eats the *fruit*, apricots.

![giraffe](https://storage.googleapis.com/usetangle-static-assets/blog/graph_example.png)

This sentence is a domain in which we have Giraffe nodes, “Edward” and “Norton”, a fruit node, “apricot”, and the relationships between them, “friends” and “enjoy eating.” By taking this statement, and identifying the relevant components, one can begin to build a model.

But why can’t we just use a normal database to do this?

The core reason is that traditional **SQL and other noSQL databases cannot scale effectively to handle these kinds of relationships**. When traversing thousands of relationships, SQL databases must do something called foreign key lookups. These lookups require the database to go to an index, which is essentially a file stored somewhere in your database. You can imagine that on average, this SQL operation takes X milliseconds when following a single relationship. If you want to traverse 10,000 relationships, it would take X*10,000 milliseconds. This is not ideal for data with a lot of relationships.

Native graph databases like [Neo4j](https://neo4j.com/) use a technique called index-free adjacency to solve this problem. Neo4j stores references to other records as pointers from a starting record, rather than in an index of foreign keys located in a database. **When performing deep traversals on large datasets in a graph, problems that previously took hours can take milliseconds.** This is profound, and its enabling us to power a model of connection at breakneck speed. If you’d like to learn more, check out this [Neo4j article](https://neo4j.com/blog/why-graph-databases-are-the-future/) that dives deeper into the power of graph databases.

### The note-graph

Tangle uses the power of the graph database to enable real-time connections between your notes. You could not use a SQL data structure and hope to achieve the same level of performance. What we end up with is something more akin to a *note-graph* than a traditional notebook.

Because Tangle’s graph stores the relationships between your notes, we are able to **abstract away any need for manual organization**. Anytime you capture a thought or take a note in Tangle, it automatically shows you the connections to any of your related content. You do no work to surface these connections; Tangle takes care of it for you instantly.

I’ll walk you through what this looks like in practice with a couple GIFs. In the first one below, I have a new note open, or what we call a “collection.” The collection, on the left, is a collection of related notes and thoughts I have captured — as you can tell by the title, this one is about the World Cup. As I capture different thoughts about the games, players, and my sadness at the United States’ failure to qualify, related captures I have written previously start to pop up.

<iframe src="https://player.vimeo.com/video/278735859" width="640" height="346" frameborder="0" allowfullscreen></iframe>

How does this work? Tangle analyzes the text using natural language processing — a type of machine learning that enables computers to understand language. In milliseconds, Tangle absorbs the content and traverses the graph, looking for other notes to which the original might have a connection.

<iframe src="https://player.vimeo.com/video/278735643" width="640" height="346" frameborder="0" allowfullscreen></iframe>

The environment Tangle creates is connection-first. It’s goal is to surface your related content when it might be useful to you. We believe that this opens up a new paradigm of enhanced creativity and productivity. No need to spend time on strict organizational structures to get the most out of your notes, no workflow disruption searching for notes you have already taken, and no more time-sink researching something online that might be hidden in your folder structure.

### So what’s next?

We are currently hard at work improving Tangle and are looking for feedback. If you are someone at the intersection of knowledge management and technology (and like trying new tech) we would love for you to participate in our alpha release. There is still time — we will be launching to select users over the next few weeks. Want to be one of them? [Sign up here!](https://ventures.us17.list-manage.com/subscribe?u=710569ad280cf37e55faa0612&id=1f711ff76c)

The Tangle team also distributes a weekly newsletter providing development updates, KM blog posts, as well as other inspiring content from around the web. [Click here](http://eepurl.com/djoBb5) to keep in touch with us!

Lastly, if you’d like to get in touch directly, please feel free to email info@usetangle.com with any questions, comments, suggestions, or any bit of general feedback. We are open to it.

Thanks for reading and thank you to the Praxis team for letting us share Tangle with you.

