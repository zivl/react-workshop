## FLUX Overview

### What we will learn?

  1. MVC issues

### MVC vs. Flux

  - MVC - **M**odel **V**iew **C**ontrol
  - Flux - 

The MVC architecture is consisted of **models** and **views**.


FLUX is single directional data FLOW
avoid both dirrections Model <-> View
- simple mental model
- easy to debug
- more meaningful unit tests

Action is introduced to the system

Dispatcher - no cascading effects
once action is introduced in the store we can't have another one until it's finished

Action creator calls the **Dispatcher** 
Provides waitFor method to ensures that the actions happen in the order in which they come in

