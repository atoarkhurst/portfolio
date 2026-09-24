---
title: Cadence
publishDate: 2026-09-23
img: /assets/cadence-hero.png
img_alt: Cadence app icon showing two connected layers
description: A shared accountability app for two friends to set weekly intentions, make progress visible, and reflect together.
tags: [Product development, React, Supabase]
status: In progress
coverTheme: cadence
liveUrl: https://atoarkhurst.github.io/cadence/
repoUrl: https://github.com/atoarkhurst/cadence
---
Cadence started with a real ritual between a friend and me: meet each week, choose a few realistic goals, keep up with each other, then reflect and reset. I’m building the app to make that rhythm easier without turning it into another complicated productivity system.

## From an idea to a shared product

The first prototype stored everything in the browser. That let me test the core interaction quickly: add an intention, make progress visible, and keep the week focused.

The project has now grown into a real shared app. I moved the data into Supabase, added authentication, and built a partnership model so two people can plan separately while still seeing the same weekly space.

## What works now

- Account creation, sign-in, and editable display names
- Private partner invitations and connection management
- Daily and weekly intentions, including one-time goals and measurable targets
- Shared progress for both partners in the current week
- A weekly reflection for wins, obstacles, and what to carry forward
- A shared history that preserves past goals and progress
- Safe partner disconnection that keeps each person’s personal data intact
- Responsive phone layouts with bottom navigation for the main actions

## Product decisions I care about

I want Cadence to feel like a weekly ritual, not project-management software. The interface keeps the plan intentionally small and encourages three or four goals rather than an endless backlog.

Carry-forward is also deliberate. The app never assumes every unfinished goal deserves another week. You choose what still matters, and anything carried forward starts fresh while the original week remains intact in history.

The same thinking shaped partner disconnection. Ending a connection should not erase someone’s work or accidentally expose old shared information to a future partner. Building that flow pushed me to think beyond the screen and make careful decisions about ownership, privacy, and the underlying data model.

## What I’m learning

Cadence is the first project where I’m taking responsibility for the full product loop: defining the problem, shaping the workflow, designing the interface, modeling the data, writing migrations, and deciding what should happen in the uncomfortable edge cases.

Technically, I’m learning React through a product I actually want to use. I’m also getting hands-on experience with authentication, relational data, shared state, database functions, automated tests, responsive design, and deployment.

## What comes next

The next step is to use Cadence consistently with a partner and let real behavior guide the product. I want to add lightweight encouragement without making the experience noisy, refine the weekly review after a few complete cycles, and keep simplifying anything that gets in the way of the ritual.
