# Purpose
This page is so that I can understand the ins and outs of how Home Assistant works.

# Overview
Home Assistant fundamentally works by breaking down everything in your house into an object with multiple functions. Those can then be further categorized by rooms. It can help for example make a doorbell which doesn't normally send a thumbnail notification of someone ringing it, to then customize it so that you can. This sort of thing can be done through the automations using some of the sensors and or triggers that an object recognized by Home Assistant has built in from that same object.

# Extended Functionality
The further ability to control your home devices can be added through 3 main areas of Home Assistant.

First,

## Integrations

This is to simply add more devices that are not already recognized by Home Assistant by default. Think of things like Eufy doorbells (don't but Eufy btw)