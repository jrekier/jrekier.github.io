---
layout: post
title: What happens when you try to reach the speed of light ?
author: jerem.
category: 'blog'
description: "I talk about the mathematics describing what happens when a massive objects is accelerated at a steady rate and how it behaves when its velocity approaches that of light using the principles of special relativity."
tags: ['math', 'physics']
---

It is a notorious fact that the speed of light is supposed to be the ultimate 'speed limit' of the Universe. This fact calls for the following question: What happens when an object is acted upon with a force of constant intensity and direction ?

According to Newton's second law, its velocity, $v$, should satisfy the following differential equation :

$$
 F = m\frac{dv}{dt}~,
$$

where $F$ is the force, $m$ is the (rest) mass of the object and $\frac{dv}{dt}$ denotes the instantaneous rate of change of its velocity (its first time derivative). When $F$ is constant, the solution to the above gives $v \sim t$ and so the velocity increases indefinitely in time.

Since the work of Einstein, we know that Newton's theory is a special case of a larger theory (the theory of relativity) and that it is only valid in the limit where $v$ remains small compared to the speed of light, $c$. As $v$ approaches this limit, relativistic effects take place which Newton's theory fails to capture.

It is surprisingly easy to write Newton's law in the more general case. All we need to do is to use the momentum of the object, $p$, in place of its velocity :

$$
 F = \frac{dp}{dt}~.
$$

When we set $p=mv$, which is the classical definition of the momentum, we recover the expression of Newton's law. However, the definition of the momentum that is valid for all values of the velocity is

$$
 p = \frac{mv}{\sqrt{1-\frac{v^2}{c^2}}}~.
$$

When we insert this into Newton's equation, we arrive at a slightly more complex differential equation for the velocity :

$$
 \frac{dv}{dt} = \frac{F}{m}\left(1-\frac{v^2}{c^2}\right)^{3/2}~.
$$

By imposing that the object is initially at rest, the solution of the above is

$$
 v(t)=\frac{c F t}{\sqrt{c^2m^2+F^2t^2}}~.
$$

The plot below illustrates the behaviour of this function where we have set $F=m=c=1$ (right plot). One can see that, contrary to the Newtonian case, shown in black for comparison, the velocity of the object never quite reaches that of light (dashed line). We have also plotted the object's position as a function of time (left plot). Interestingly, the displacement starts as a quadratic function of time, as in the Newtonian case, but deviates to adopt a linear behaviour when the velocity approaches that of light.

![alt](/images/posts_data/speed-limit/speed_limit_fig_1.svg)

One possible interpretation of the above is that, as the velocity of an object increases, its *inertia* increases with it. In other words, it opposes a stronger resistance to a change of its velocity. Some authors interpret this fact by saying that $m$ in the above is a valid measure of the object's mass only when it is at rest. When it is in motion, its mass becomes equal to the factor that multiplies $v$ in the above definition of the relativistic momentum.

Whether this interpretation is right or wrong is a matter for metaphysical debate.
