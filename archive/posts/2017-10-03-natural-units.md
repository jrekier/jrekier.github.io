---
layout: post
title: Dimensional analysis
author: jerem.
category: 'blog'
description: "I give a short description of dimensional analysis and how it can be used to check the mathematics of computations in physics and also how it can be used to simplify the equations by getting rid of constant parameters."
tags: ['math', 'physics']
---

When dealing with equations in physics, checking our units is an excellent way of looking for errors. For example, suppose we were to for the trajectory of an object dropped from the top of a cliff of height $h$. If we assume that the object is initially at rest, we would arrive at:

$$
z=h-g\frac{t^2}{2}~,
$$

where $t$ is time, $z$ stands for the height of the object measured from the ground and $g$ is the gravitational acceleration. A quick check of the dimensions will tell us that all three terms have units of length, as they should. Our results looks *consistent* from a dimensional point of view. This does not necessarily mean that it is *correct* but if we had found that the units were inconsistent, then we would have been absolutely sure that it was not.

The parameter $g$ has a particular status among the symbols of the above expression. It can be thought of as a constant *conversion factor* transforming time scales squared to length scales. Knowing the dimensions of this factor is essential in using the trick described above.

But, sometimes, having to drag conversion factors around is the dominant source of errors. There is, however, a method also based on dimensional analysis to get rid of such factors. I will illustrate this for a more complex problem of quantum mechanics. That of finding the energy levels of a free massive particle in a 1-dimensional box.

The problem reduces to solving the free Schrödinger equation
$$
-\frac{\hbar^2}{2\mu}\frac{d^2\psi}{dx^2}=E\psi~,
$$
subjected to the boundary conditions $\psi(x=0)=\psi(x=l)=0$, where $l$ denotes the length of the box, $\mu$, the mass of the particle and $E$, its energy.

We start by identifying the fundamental independent units of the problem. Very often, these consists only in *mass* (M), *length* (L) and *time* (T). Occasionally one might need to add a unit of electric charge or temperature, but this is not necessary here. The *dimensional analysis* version of the above equation gives us :
$$
\frac{[\hbar^2]}{M L^2}=[E]~.
$$
where a symbol in square brackets denotes its units regardless of its numerical value. In order to identify the units of E in terms of our fundamental dimensions of mass, length and time, it is best to use a mnemonic equation. The obvious candidate here is $E=mc^2$ which tells us that $[E]=M L^2T^{-2}$, from which we can obtain
$$
\begin{equation}
[\hbar]=L^2MT^{-1}~.\label{eq:hbarunits}
\end{equation}
$$

Next, we identify the natural physical scales of the problem which we will call $L_S$,$M_S$ and $M_S$. Having found these, we will then use them to measure all our masses $m$, lengths $d$ and times $t$ so that
$$
\begin{align}
m&\rightarrow m~M_S\\\\
d&\rightarrow d~L_S\\\\
t&\rightarrow t~T_S~,
\end{align}
$$
with the symbols $m$, $t$ and $d$ on the right now being dimensionless.
Going back to our problem, it makes sense to identify $M_S=\mu$ and $L_S=l$. From, Eq.\eqref{eq:hbarunits}, we then see that the most natural time scale is
$$
T_S=\frac{l^2 \mu^2}{\hbar}~.
$$

Now comes the clever part. Once these scales have been chosen, we **set the numerical value of each to *one***, which amounts to a simple choice of units. For example, setting $M_S=\mu=1$ means that all masses will now be measured as multiples of $\mu$. In this new set of units, Schrödinger equation from above now turns into its simplified *dimensionless form*:
$$
\begin{equation}
-\frac{1}{2}\frac{d^2\psi}{dx^2}=E\psi~,\label{eq:schrodingeradim}
\end{equation}
$$
with $E$ now being measured in units of $E_s=M_S L_S^2 T_S^{-2}=1$. It may seem surprising that we are still able to say anything about our problem when so many quantities have already been set to one. It is worth noting, however, that, even though our new equation is now considerably more readable than the original, we have lost the possibility to check the steps of our computations using dimensional analysis. This is, nevertheless certainly a price worth paying.

The general solution of the homogeneous form of Eq. \eqref{eq:schrodingeradim} is
$$
\psi(x)=A e^{ikx}+B e^{-ikx}~.
$$
Imposing $\psi(x=0)=0$, gives $A+B=0$, which yields $\psi(x)=A \sin(kx)$ and $\psi(x=1)=0$ (remember that now $l=1$), imposes that
$$
\begin{align}
k=n\pi&&n\in\mathbb{N}~.
\end{align}
$$
Inserting this back into the original equation gives the values of the energy levels in a very elegant form
$$
E=\frac{n^2\pi^2}{2}~.
$$
Of course, one might want the numerical values of these in a set of units that is more convenient for comparison with experiment. To get these, we simply need to multiply our result by the energy scale $E_S$, but now leaving its precise numerical value left to be set by any other choice of units. One has $E_S=\frac{\hbar^2}{\mu l^2}$ so that one finally gets
$$
E=\frac{n^2\pi^2}{2}\frac{\hbar^2}{\mu l^2}~.
$$
The nice thing about this whole method is that it allows to immediately guess the dependence of the solution in the physical parameters of the system (here $l$ and $\mu$) without having to carry around their symbols. In fact, without even solving the problem, we could have guessed that the energy levels would be multiples of $\frac{\hbar^2}{\mu l^2}$ just by doing a bit of dimensional analysis. This might seem like a minor bonus in the present context but is in fact a huge deal in more computations.
