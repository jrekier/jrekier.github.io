---
title: "Numerical Methods for Internal Planetary Dynamics"
featured_image: "gi-modes.png"
description: "Numerical Methods for Internal Planetary Dynamics"
date: "1917-10-27" # fake date for sorting
---

The physics of planetary and astrophysical liquid layers is governed by the equations of *(magneto-)hydrodynamics*. In most cases, these coupled partial differential equations in time and space cannot be solved exactly and approximations must be made. In the astrophysical context, it is often justifiable to assume that the Coriolis force is the dominant cause of advection. This assumption allows simplifying the equations, but they still cannot be solved analytically in most cases, and numerical resolutions are needed to achieve progress. 

To solve the equations of rotating magnetohydrodynamics numerically, my colleagues and I have built a software called [Kore](https://github.com/repepo/kore) *(Κόρη)*. This software uses an efficient fully spectral discretization scheme based on a combination of spherical harmonics in the polar and azimuthal coordinates, and *Gegenbauer* (aka *Ultraspherical*) polynomials in the radial direction [@OlverTownsend2013]. This combination makes it the most efficient software of its type (currently). 

![gi-modes](/images/gi-modes.png "Kinetic energy density of the flow of gravito-inertial modes computed with Kore.")

In order to ease the discretization of the dynamic equations, I have developed another software called [Sprouts](https://github.com/jrekier/sprouts). This software is basically a *Mathematica* package that turns lists of ordinary differential equations into a set of big matrices that represent an approximation of the original problem. 


