Inprocmq
================================

*In-process message queues for node.js*

This project is an example framework for light weight in-process message queues.  Often a complex program has multiple modules producing and consuming events, and each module is coded to take certain actions on certain events.  Without a structured approach programming each logic path can be cumbersome and increasingly difficult to extend when adding new features.

Based on the very nice "minimal-queue" npm package, it is easy to set up single concurrency message queues in a main module and any number of sub level library modules.

The main.js, liba.js and libb.js files demonstrate this framework and how to publish and consume messages in each module. 
