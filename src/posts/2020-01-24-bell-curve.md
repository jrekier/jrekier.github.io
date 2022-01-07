---
layout: post
title: Some bell curves
author: jerem.
category: 'blog'
description: "I work out some of the properties of the Gaussian function from its generating differential equation including its first integral."
tags: ['math']
featured_image: "/images/posts_data/bell-curve/featured.jpg"
---

In the [previous post](/blog/2020/what-growth-means), I wrote about the exponential and its definition as the function proportional to its first derivative, namely:

$$
\begin{equation}
\frac{dy}{dt}+\lambda y(t)=0~.\label{eq:dydtexp}
\end{equation}
$$

There are many functions of mathematics that derive from differential equations like this one. Take the following example where the function of a single space variable, $y(x)$, is not just proportional to its first derivative, but rather satisfies

$$
\begin{equation}
\frac{dy}{dx}+\frac{x}{\sigma^2}y(x)=0~,\label{eq:dydxbell}
\end{equation}
$$
where $\sigma$ is a constant real number. In order to solve the above we can use the technique of separation of variables (pardon the lack of mathematical rigour):

$$
\begin{align}
\frac{dy}{dx}&=-\frac{x}{\sigma^2}y(x)\nonumber\\\\
\leftrightarrow \int\frac{dy}{y}&=-\int\frac{x}{\sigma^2}dx\nonumber\\\\
\leftrightarrow \log(y)&=-\frac{1}{2}\frac{x^2}{\sigma^2}+B\nonumber\\\\
\leftrightarrow y(x)&=Ae^{-\frac{1}{2}\frac{x^2}{\sigma^2}}~,\label{eq:y(x)bell}
\end{align}
$$
where $\log(x)$ is the natural logarithm (the inverse of the exponential function, $e^x$) and $A$ and $B\equiv \log{A}$ are constants. This function is the Gaussian function centred at the origin and has many applications in many areas of mathematics including probability theory, statistics, information theory, quantum mechanics, etc... Equation \eqref{eq:dydxbell} is a perfectly valid -- although not very common -- definition of this function and has the advantage of explicitly showing some of the function's properties. For example, it is invariant under the transformation that takes $x$ to $-x$, contrary to Eq. \eqref{eq:dydtexp} when $t$ goes to $-t$.

By taking the derivative on both sides of Eq. \eqref{eq:dydtexp}, we obtain the following second order differential equation :

$$
\begin{equation}
\frac{d^2y}{dx^2}+\frac{\sigma^2-x^2}{\sigma^4}y=0~.\label{eq:d2ydx2bell}
\end{equation}
$$
Since the sign of $y$ is constant for all values of $x$, this means that $\frac{d^2y}{dx^2}$ changes sign at $x=\pm\sigma$ corresponding to the location of inflection points in the original function. By inserting these values back into Eq.(3), we find that these correspond to $y(\pm\sigma)=\frac{A}{\sqrt{e}}\approx0.607 A$. You can see the plot of the function for different values of $\sigma$ on the figure below.

![bell curve](/images/posts_data/bell-curve/bell.png)

Because of its shape, the Gaussian function is sometimes referred to as the *bell curve*. From Eq. (\ref{eq:dydxbell}), we see that its first derivative is simply (assuming $A=1$)
$$
\frac{dy}{dx}=\frac{x}{\sigma^2}e^{-\frac{1}{2}\frac{x^2}{\sigma^2}}~.
$$
Its first integral, however, cannot be evaluated in terms of simple functions. There is, however, a notable exception when the integral covers the entire real line:
$$
\begin{equation}
I\equiv\int_{-\infty}^{\infty}e^{-\frac{1}{2}\frac{x^2}{\sigma^2}}dx=?\label{eq:I?}
\end{equation}
$$
The trick is to start by taking the square of the above and then change to the polar set of coordinates
$$
\begin{align}
I^2&=\int_{-\infty}^{\infty}e^{-\frac{1}{2}\frac{x^2}{\sigma^2}}dx\int_{-\infty}^{\infty}e^{-\frac{1}{2}\frac{y^2}{\sigma^2}}dy\nonumber\\\\
&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}e^{-\frac{1}{2}\frac{x^2+y^2}{\sigma^2}}dxdy\nonumber\\\\
&=\int_{0}^{2\pi}d\theta\int_{0}^{\infty}r e^{-\frac{1}{2}\frac{r^2}{\sigma^2}}dr~.
\end{align}
$$
The integrand on the right is equivalent to the right-hand side of Eq.(2) where $x\rightarrow r$. By substituting the left-hand side, we arrive at
$$
\begin{align}
I^2&=2\pi\sigma^2\int_{0}^{\infty}\frac{d}{dr}e^{-\frac{1}{2}\frac{r^2}{\sigma^2}}dr\\\\
&=2\pi\sigma^2 \left\\{e^{-\frac{1}{2}\frac{r^2}{\sigma^2}}\right\\}_{0}^\infty\\\\
&\leftrightarrow I=\sqrt{2\pi}~\sigma~.
\end{align}
$$

The *Error function* is a special case of Eq. \eqref{eq:I?} defined as
$$
\begin{align}
\text{Erf}(x)&=\frac{2}{\sqrt{\pi}}\int_0^xe^{-u^2}du\\\\
\text{Erf}\left(\frac{x}{\sqrt{2}\sigma}\right)&=\frac{2}{\sqrt{2\pi}\sigma}\int_0^xe^{-\frac{1}{2}\frac{u^2}{\sigma^2}}du\label{eq:Erf}
\end{align}
$$
The figure below shows the plot of Eq. \eqref{eq:Erf} for different values of $\sigma$.

![error function](/images/posts_data/bell-curve/error.png)

From Eq. \eqref{eq:d2ydx2bell} and the definition of the error function, one can compute the following *weighted* Gaussian integral:

$$
\begin{align}
\int_0^x \frac{u^2}{\sigma^2}e^{-\frac{1}{2}\frac{u^2}{\sigma^2}}du&=\int_0^x e^{-\frac{1}{2}\frac{u^2}{\sigma^2}}du+\sigma^2\int_0^x \frac{d^2}{du^2}\left(e^{-\frac{1}{2}\frac{u^2}{\sigma^2}}\right)du\\\\
&=\int_0^x e^{-\frac{1}{2}\frac{u^2}{\sigma^2}}du+\sigma^2\left\\{\frac{d}{du}\left(e^{-\frac{1}{2}\frac{u^2}{\sigma^2}}\right)\right\\}_0^x\\\\
&=\sqrt{\frac{\pi}{2}}\sigma~\text{Erf}\left(\frac{x}{\sqrt{2}\sigma}\right)-e^{-\frac{1}{2}\frac{x^2}{\sigma^2}}x~.
\end{align}
$$
