## FLUX Overview

### What we will learn?

  1. MVC issues

### MVC vs. Flux

**MVC** stands for **M**odel **V**iew **C**ontrol and is an architecture in which the data flows in two directions. The data flows from the models to the views which means that the number of data pipelines increases as we introduce more models and views. This graph of bidirectional data flows becomes very complicated to grasp and maintain as the application scales.

Flux on the other hand has a unidirectional flow of data. This architecture is consisted of four main parts:

  1. ACTION
  2. DISPATCHER
  3. STORE
  4. VIEW

Since **Flux** has single directional data flow, it is easier for the developers to maintain, debug and test. It creates a simple mental model for the application in the programmer's minds.

### Action
Action is introduced to the system

## Action Creator
Action creator calls the **Dispatcher** 
Provides waitFor method to ensures that the actions happen in the order in which they come in


Dispatcher - no cascading effects
once action is introduced in the store we can't have another one until it's finished


