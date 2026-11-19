---
layout: post
title: The decimal point is ambiguous
author: jerem.
category: 'blog'
description: "A short post about the ambiguous nature of the decimal point. This illustrates how a number shouldn't be confused with its graphical representation."
tags: ['math']
---

Many numbers can be symbolically written in more than one way. For example :

$$1=\frac{1}{1}=\frac{2}{2}=\frac{3}{3}=\cdots$$

The decimal point notation also has its own problems. For example, consider the following perfectly valid identity :

$$1=0.99999999\cdots~,$$

with the series of $9$s repeating *ad infinitum*. There are many ways to prove the above. Here is one.

The right-hand side can be written in a form involving a *geometric progression* :

$$
9 \sum_{n=1}^{\infty} 10^{-n}~.
$$
The series converges in $\mathbb{R}$. Its value can thus be computed using the usual formula

$$
\sum_{n=1}^{k} r^n=\frac{r~(1-r^{k})}{1-r}~.
$$
with $0\leq r<1$,  $r^n\rightarrow 0$, which, in our case gives
$$
\sum_{n=1}^{\infty} 10^{-n}=\frac{1}{9}~.
$$
Which proves the identity.
