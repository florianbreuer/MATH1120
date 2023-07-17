var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Chap-Calculus_1",
  "level": "1",
  "url": "Chap-Calculus_1.html",
  "type": "Chapter",
  "number": "1",
  "title": "CA1: Maclaurin and Taylor Series",
  "body": "    CA1: Maclaurin and Taylor Series            Introduction   Faster multiplication  There are actually multiplication algorithms which are significantly faster than long multiplication. Long multiplication of of two -digit numbers will typically take single-digit multiplications (and another  -digit additions). The fastest known algorithm is due to David Harvey and Joris van der Hoeven, and requires a number of steps proportional to , which for large value of is a significant improvement.   Have you ever wondered how computers actually calculate things? Computers can only ever do finitely many steps with finitely many bits of information. The inputs in a calculation are numbers represented by finitely many (decimal or binary) digits, for example and . You probably learned in primary school how to do long addition or multiplication with pencil and paper, and you could imagine that your computer might follow a similar algorithm and compute in a finite number of steps. But then how does it calculate or , or other non-polynomial functions?  The solution is to approximate the function using a power series . For example, the computer approximates by adding finitely many terms of in other words, it approximates the function  via the power series     Factorials  Here is  factorial . It grows really fast: The factorial satifies the useful property that , meaning that fractions with factorials in the numerator and denominator will often allow lots of cancellation.   Challenge: Determine the number of zeroes at the end of the decimal expression for    How does the computer know how many of these terms to add? The short answer is: as many as needed to get the required level of accuracy. The long answer is much more complicated, and is the subject of a whole other area of Mathematics called Numerical Analysis .  How does the computer know to use this particular series? And what even is a series? That's what we'll learn in this chapter!       Infinite Series  Let's look carefully at the calculation . We will add the terms one by one and keep an eye on the cumulative total, more formally known as the partial sums :    Number of Terms  Partial Sum  Value                                  If you're viewing this online, you can compute this yourself by running the following Sage cell:   This computation is actually quite inefficient, since we're calculating each term from scratch. Notice that the term is obtained by multiplying the previous term by : Firstly, this allows us to calculate the sum more efficiently:  Efficiency  We do we care about efficiency? Aren't modern computers plenty fast enough? For this example, yes. But there are often cases where we need to compute efficiently, for example in mobile devices with limited power, or calculations that need to be repeated millions of times per second, for example in computer graphics.   Secondly, as we add more terms, gets ever bigger while stays the same, so the multiplier we use to get from one term to the next gets ever smaller. This means that the terms shrink to zero exponentially and we will see in the next chapter ( ) that the sum converges for every value of .  In the above calculation, we have only computed finitely many terms, which is all one ever needs for applications. Mathematically, however, is an infinite series, and its value represents the sum of all infinitely many terms. What can this mean?  We have seen that the partial sums tend to , and this limit is defined to the be sum of the infinite series:     Given a sequence  of real numbers (the terms), we define the series  to be the limit of the partial sums (running totals) of the terms, provided that this limit exists.  If the limit exists, we say that the series converges , otherwise it diverges.     We will learn more about convergence and divergence in the next chapter. For now, we're interested in using infinite series to represent useful functions, like , or .       Power Series  Our first example above shows that the function can be expressed as an infinite series in the following form: Note that each term consists of a coefficient multiplied by some power of the variable, so this is an example of what we call a power series . Power series are particularly useful, as we can approximate them by the sum of the first few terms, which is then a polynomial. We're very comfortable with polynomials. Figure shows how the first few partial sums of the series approximate the function .  Approximation to by various partial sums of its power series   A plot of together with plots of the partial sums of its power series of degrees and .     Power series aren't the only way to represent interesting functions: there are also other types of series, infinite products, continued fractions...    Assuming for now that the series converges, how do we know this is even true? How does one find such a series?       Maclaurin Series  Let's suppose for the moment that a power series representation for a function  exists , but we don't know what the coefficients should be: We can find the value of the first coefficient by the clever trick of plugging into : What about the next coefficient? We use an even cleverer trick: differentiating the series kills the first coefficient and decreases the exponent in all other coefficients: Plugging into this gives us . Let's differentiate another time: so , next , etc. In general, we find   Maclaurin   Let be an open interval, and suppose that the power series converges to for . Then, for ,      Use induction on to prove that the expression in is correct.   The series expansion is called the Maclaurin series for the function .  So now that we know how to create power series for functions using their derivatives, let's do the same for two more important functions:    Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to odd powers of , and odd numbers are of the form . The then ensures the alternating signs.      Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to even powers of , and even numbers are of the form . The then ensures the alternating signs.    We record the Maclaurin series we have found thus far:        Euler's Formula  You may have noticed that the Maclaurin series for and all look very similar - the series for has exactly the same terms as the series for , except for the differences in signs.  It turns out we can fix these signs if we subsitute , where is the imaginary unit. Using the fact that we find that     Euler   For we have    In particular, if we set , we obtain the following amazing formula, which combines the five most important constants in Mathematics:   The most beautiful formula  A survey at the 2006 International Congress of Mathematicians in Madrid, Spain, asked delegates from all over the world what they thought was the most beautiful mathematical formula. The winner, by far, was Euler's formula .         Maclaurin Polynomials  Now we have a method for obtaining power series expressions for functions. But these are infinite series, and for most applications we want to approximate our functions with finite polynomials. That's really easy - we just cut off the series after a finite number of terms:     The degree Maclaurin polynomial of a function is      Note that the degree Maclaurin polynomial will generally consist of terms. However, it will have degree less than if the coefficient of equals zero, for example   The degree 0 Maclaurin polynomial of is not very interesting, it's the just the constant function .  You'll recognise the degree 1 Maclaurin polynomial : its graph is the tangent to at . We also call it the linear approximation to , it is the linear function that most closely approximates near .  Similarly, the degree 2 Maclaurin polynomial is called the quadratic approximation to . It is the quadratic function closest to near .  The following Sage cell let's you plot the Maclaurin polynomials for and :    Computer algebra systems  Computer Algebra Systems usually have a command for calculating Maclaurin series. For example, the following shows part of the output from a Wolfram Alpha query.     We have already seen Sage code to compute Maclaurin series, here is the simplest code:      Taylor series   Plot of and its degree 5 Maclaurin polynomial.   Plot of and its degree 5 Maclaurin polynomial. The polynomial starts diverging visibly from the plot of when .     compares to its degree 5 Maclaurin polynomial. We notice that the polynomial is a poor approximation of when . What can we do about this? We could use Maclaurin polynomials of ever higher degree, but these get ever more complicated.  The issue is that Maclaurin series are computed based on the value of the function and its derivatives around , so it's not surprising that they best approximate the function near If for some reason we're more interested in the function near another value, say near , then instead of computing Maclaurin polynomials of high degree, we can simply shift our function along the -axis until the point of interest lies above , compute the Maclaurin polynomials of the shifted function, and then shift back.  In other words, we consider the shifted function , then compute the Maclaurin series for : Finally, we shift back to obtain a power series for : This is the Taylor series for  centred at  .   Taylor Series   The series,   .  is called the Taylor series for about     Note that a Maclaurin series is simply a Taylor series centred at   The degree  Taylor polynomial of centred at is - you guessed it - the sum of the terms of the Taylor series of degree at most .    Compute the Taylor series of the function centred at .    We compute the derivatives of at : Thus      Degree 3 Taylor polynomial of centred at   Plot of and its degree 3 Taylor polynomial centered at .      Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is      Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is      Example Tasks   Find the Taylor series for about     Find the Taylor polynomial of degree for about     Find the Taylor polynomial of degree for about     Find the rd degree Taylor polynomial for about      A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.           Advanced Topics   Computing  It's not hard to show, using repeated differentiation, that the Maclaurin series for is Since , this gives us an infinite series converging to :    As you can see from this computation, convergence is extremely slow. See how big you must make N in the above code before you get two correct digits after the decimal point.  One can compute much faster by using identities such as the following, due to John Machin (in 1706):    Modern algorithms to compute are more sophisticated and much faster still, see . We mention only one method, the BBP (Bailey-Borwein-Plouffe) Algorithm: This formula not only converges extremely quickly, but it also also you to compute specific hexadecimal digits of without first computing the previous digits.     A function without Maclaurin series  Consider the function This function is well-defined and continuous at - you can compute the limit    Plot of   Plot of    One can show that this function is well-defined and differentiable, in fact for we have (check this yourself): The plot in is suspiciously flat near , and in fact we have Therefore, the Maclaurin series for is identically zero! So this function does not equal its Maclaurin series.  Replacing by in the power series for , we get This is not strictly a power series, but a Laurent series , which converges for .   Here we see that the partial sums approximate well for large , but not for small .    Other types of series  For one can show that the following infinite series converges: This defines the zeta-function , a fascinating function defined by a series other than a power series. Later we will see that is related to the distribution of prime numbers. When is an even integer, it takes on very interesting values: Its values at the odd integers are much more mysterious.    Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .     Infinite products  Instead of adding infinitely many terms, one might also multiply them. Thus one may express some functions as infinite products, for example You can plot the finite products against and in the following Sage cells:      "
},
{
  "id": "p-5",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorial "
},
{
  "id": "p-6",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Challenge: "
},
{
  "id": "p-9",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial sums "
},
{
  "id": "def-series",
  "level": "2",
  "url": "Chap-Calculus_1.html#def-series",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  Given a sequence  of real numbers (the terms), we define the series  to be the limit of the partial sums (running totals) of the terms, provided that this limit exists.  If the limit exists, we say that the series converges , otherwise it diverges.    "
},
{
  "id": "p-18",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power series "
},
{
  "id": "thm-Maclaurin",
  "level": "2",
  "url": "Chap-Calculus_1.html#thm-Maclaurin",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": " Maclaurin   Let be an open interval, and suppose that the power series converges to for . Then, for ,    "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "Chap-Calculus_1.html#exercise-1",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": " Use induction on to prove that the expression in is correct.  "
},
{
  "id": "p-24",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Maclaurin series "
},
{
  "id": "example-1",
  "level": "2",
  "url": "Chap-Calculus_1.html#example-1",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": "  Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to odd powers of , and odd numbers are of the form . The then ensures the alternating signs.   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#example-2",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": "  Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to even powers of , and even numbers are of the form . The then ensures the alternating signs.   "
},
{
  "id": "thm-eulers-formula",
  "level": "2",
  "url": "Chap-Calculus_1.html#thm-eulers-formula",
  "type": "Theorem",
  "number": "1.7",
  "title": "",
  "body": " Euler   For we have    "
},
{
  "id": "p-43",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-43",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree Maclaurin polynomial "
},
{
  "id": "p-47",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-47",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear approximation "
},
{
  "id": "p-48",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-48",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic approximation "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "Chap-Calculus_1.html#remark-1",
  "type": "Remark",
  "number": "1.9",
  "title": "Computer algebra systems.",
  "body": " Computer algebra systems  Computer Algebra Systems usually have a command for calculating Maclaurin series. For example, the following shows part of the output from a Wolfram Alpha query.     We have already seen Sage code to compute Maclaurin series, here is the simplest code:   "
},
{
  "id": "fig-plot-sin-T5",
  "level": "2",
  "url": "Chap-Calculus_1.html#fig-plot-sin-T5",
  "type": "Figure",
  "number": "1.11",
  "title": "",
  "body": " Plot of and its degree 5 Maclaurin polynomial.   Plot of and its degree 5 Maclaurin polynomial. The polynomial starts diverging visibly from the plot of when .   "
},
{
  "id": "p-54",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor series centred at "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "Chap-Calculus_1.html#definition-3",
  "type": "Definition",
  "number": "1.12",
  "title": "Taylor Series.",
  "body": " Taylor Series   The series,   .  is called the Taylor series for about    "
},
{
  "id": "p-59",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-59",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor polynomial "
},
{
  "id": "example-3",
  "level": "2",
  "url": "Chap-Calculus_1.html#example-3",
  "type": "Example",
  "number": "1.13",
  "title": "",
  "body": "  Compute the Taylor series of the function centred at .    We compute the derivatives of at : Thus    "
},
{
  "id": "fig-plot-cos-T3",
  "level": "2",
  "url": "Chap-Calculus_1.html#fig-plot-cos-T3",
  "type": "Figure",
  "number": "1.14",
  "title": "",
  "body": " Degree 3 Taylor polynomial of centred at   Plot of and its degree 3 Taylor polynomial centered at .   "
},
{
  "id": "Second_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Chap-Calculus_1.html#Second_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "1.15",
  "title": "",
  "body": " Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is    "
},
{
  "id": "Fourth_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Chap-Calculus_1.html#Fourth_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "1.16",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is    "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#exercise-2",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": " Find the Taylor series for about   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "Chap-Calculus_1.html#exercise-3",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "Chap-Calculus_1.html#exercise-4",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "Chap-Calculus_1.html#exercise-5",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": " Find the rd degree Taylor polynomial for about   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#remark-2",
  "type": "Remark",
  "number": "1.17",
  "title": "A little remark.",
  "body": " A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.     "
},
{
  "id": "fig-exp-minus-1-over-x-squared",
  "level": "2",
  "url": "Chap-Calculus_1.html#fig-exp-minus-1-over-x-squared",
  "type": "Figure",
  "number": "1.19",
  "title": "",
  "body": " Plot of   Plot of   "
},
{
  "id": "p-85",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-85",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laurent series "
},
{
  "id": "p-87",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zeta-function "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "Chap-Calculus_1.html#exercise-6",
  "type": "Checkpoint",
  "number": "1.20",
  "title": "",
  "body": "  Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
