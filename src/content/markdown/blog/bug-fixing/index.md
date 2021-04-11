---
title: More fruitful bug fixing / A mental model for productive bug fixing
description: Avoid the temptation of doing quick bug fixes. Embrace the opportunity to improve the system.
date: "2021-03-31T10:00:00.000Z"
featuredImage: "./bug.jpeg"
---

I actually really enjoy fixing software bugs. The detective work, building up hypothesis about the underlying root cause, digging through paper trails and turning stones to find the culprit. But what I enjoy the most is the **opportunity to improve the system**. Unfortunately, this last step is sometimes skipped by quickly squashing a bug and carrying on with other activities.

While a quick fix seems efficient you might miss important learnings and a perfect opportunity to:

- clean up technical debt and making your system easier to maintain
- helping co-workers and future you not commit the same mistake again
- understand the quality of your system's safety nets.

I tried to generalize my mental model for fixing bugs, it boils down to a 4 step process:

1. determine the severity: do I need to do anything about the issue right now?
2. improve your safety nets: improve your system to catch the bug now and in the future
3. the actual fix
4. post-mortem analysis (if applicable)

### Step 1: Determine the severity 🐛

When a bug or incident is discovered our first step is to determine the severity. If you are fixing an issue that is already triaged or prioritized, you can skip this step.

Some questions to consider:

- if the issue revealed itself after a release, should we just roll back or revert the last changes?
- anything else we can do right now to restore the service?
- do we need to inform anyone about the issue (e.g. product owner, customers or your co-workers)?
- when should the issue be fixed? We should be very mindful about context switching

If you skip this initial step you might end up wasting time fixing non-important issues. Or you dive into fixing an important issue, but do not inform anyone that you are doing this.

### Step 2: Improve your safety nets 🚨

How can we enable our system to catch or highlight the bug now (and in the future)?

The answer to this question might include adding one or more of the following safety nets:

- improve linting setup
- introduce or refining a static type
- automated tests (unit, integration, end-to-end)
- manual test protocol (should be a last resort)
- add support for feature flags for faster rollbacks
- improve monitoring, alerting or observability.

Word of caution: establish these safety nets by working _within the system_, avoid extensive refactoring that might introduce new regressions.

At the end of this step we hopefully have a red lamp.

If you feel you don't have time to improve your safety nets before fixing the issue then take a step back. How can you get more time to fix this properly? If the production system is in a really bad state could you revert to a previous version? Could you disable the broken feature by flipping a feature flag?

### Step 3: The fix ✅

Now is the time to fix the the offending code, infrastructure configuration, or what actually caused the bug to appear. Turning the lamp green is usually the easy part.

### Step 4: Post-mortem analysis

You should considered if the severity of the bug merits a post-mortem.

A post-mortem is a blame-free analysis and discussion soon after an incident or event has taken place to learn from the experience. It ensures that an incident is documented, that all contributing root cause(s) are well understood, and, especially, that we learn from our the incident and preventive actions are put in place to reduce the likelihood and/or impact of recurrence.

I recommend that you trigger a post-mortem in case of: data loss of any kind, user-visible downtime or degradation, manual developer intervention (e.g. release rollback) or when we lost a substantial amount of time firefighting.

This [guide](https://www.atlassian.com/incident-management/postmortem) seems like a great resource if you want to learn more about incident management using post-mortem.

Happy de-bugging!

![On September 9, 1947, the world's first computer bug was recorded by Grace Hopper. It was a real-life moth that was causing issues with the computer’s hardware.
](./bug.jpeg)
