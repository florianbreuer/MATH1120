var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Chap-Calculus_1",
  "level": "1",
  "url": "Chap-Calculus_1.html",
  "type": "Chapter",
  "number": "1",
  "title": "CA1: Maclaurin Series",
  "body": "    CA1: Maclaurin Series            Introduction   Faster multiplication  There are actually multiplication algorithms which are significantly faster than long multiplication. Long multiplication of of two -digit numbers will typically take single-digit multiplications (and another  -digit additions). The fastest known algorithm is due to David Harvey and Joris van der Hoeven, and requires a number of steps proportional to , which for large value of is a significant improvement.   Have you ever wondered how computers actually calculate things? Computers can only ever do finitely many steps with finitely many bits of information. The inputs in a calculation are numbers represented by finitely many (decimal or binary) digits, for example and . You probably learned in primary school how to do long addition or multiplication with pencil and paper, and you could imagine that your computer might follow a similar algorithm and compute in a finite number of steps. But then how does it calculate or , or other non-polynomial functions?  The solution is to approximate the function using a power series . For example, the computer approximates by adding finitely many terms of in other words, it approximates the function  via the power series     Factorials  Here is  factorial . It grows really fast: The factorial satifies the useful property that , meaning that fractions with factorials in the numerator and denominator will often allow lots of cancellation.   Challenge: Determine the number of zeroes at the end of the decimal expression for    How does the computer know how many of these terms to add? The short answer is: as many as needed to get the required level of accuracy. The long answer is much more complicated, and is the subject of a whole other area of Mathematics called Numerical Analysis .  How does the computer know to use this particular series? And what even is a series? That's what we'll learn in this chapter!       Infinite Series  Let's look carefully at the calculation . We will add the terms one by one and keep an eye on the cumulative total, more formally known as the partial sums :    Number of Terms  Partial Sum  Value                                  If you're viewing this online, you can compute this yourself by running the following Sage cell:   This computation is actually quite inefficient, since we're calculating each term from scratch. Notice that the term is obtained by multiplying the previous term by : Firstly, this allows us to calculate the sum more efficiently:  Efficiency  We do we care about efficiency? Aren't modern computers plenty fast enough? For this example, yes. But there are often cases where we need to compute efficiently, for example in mobile devices with limited power, or calculations that need to be repeated millions of times per second, for example in computer graphics.   Secondly, as we add more terms, gets ever bigger while stays the same, so the multiplier we use to get from one term to the next gets ever smaller. This means that the terms shrink to zero exponentially and we will see in the next chapter ( ) that the sum converges for every value of .  In the above calculation, we have only computed finitely many terms, which is all one ever needs for applications. Mathematically, however, is an infinite series, and its value represents the sum of all infinitely many terms. What can this mean?  We have seen that the partial sums tend to , and this limit is defined to the be sum of the infinite series:     Given a sequence  of real numbers (the terms), we define the series  to be the limit of the partial sums (running totals) of the terms, provided that this limit exists.  If the limit exists, we say that the series converges , otherwise it diverges.     We will learn more about convergence and divergence in the next chapter. For now, we're interested in using infinite series to represent useful functions, like , or .       Power Series  Our first example above shows that the function can be expressed as an infinite series in the following form: Note that each term consists of a coefficient (for example ) multiplied by some power of the variable (for example ), so this is an example of what we call a power series . Power series are particularly useful, as we can approximate them by the sum of the first few terms, which is then a polynomial. We're very comfortable with polynomials. Figure shows how the first few partial sums of the series approximate the function .  Approximation to by various partial sums of its power series   A plot of together with plots of the partial sums of its power series of degrees and .     Power series aren't the only way to represent interesting functions: there are also other types of series, infinite products, continued fractions...    Assuming for now that the series converges, how do we know this is even true? How does one find such a series?       Maclaurin Series  Let's suppose for the moment that a power series representation for a function  exists , but we don't know what the coefficients should be: We can find the value of the first coefficient by the clever trick of plugging into : What about the next coefficient? We use an even cleverer trick: differentiating the series kills the first coefficient and decreases the exponent in all other coefficients: Plugging into this gives us . Let's differentiate another time: so , next , etc. In general, we find   Maclaurin   Let be an open interval, and suppose that the power series converges to for . Then, for ,      Use induction on to prove that the expression in is correct.   The series expansion is called the Maclaurin series for the function .  So now that we know how to create power series for functions using their derivatives, let's do the same for two more important functions:    Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to odd powers of , and odd numbers are of the form . The then ensures the alternating signs.      Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to even powers of , and even numbers are of the form . The then ensures the alternating signs.    We record the Maclaurin series we have found thus far:        Euler's Formula  You may have noticed that the Maclaurin series for and all look very similar - the series for has exactly the same terms as the series for , except for the differences in signs.  It turns out we can fix these signs if we subsitute , where is the imaginary unit. Using the fact that we find that     Euler   For we have    In particular, if we set , we obtain the following amazing formula, which combines the five most important constants in Mathematics:   The most beautiful formula  A survey at the 2006 International Congress of Mathematicians in Madrid, Spain, asked delegates from all over the world what they thought was the most beautiful mathematical formula. The winner, by far, was Euler's formula .         Maclaurin Polynomials  Now we have a method for obtaining power series expressions for functions. But these are infinite series, and for most applications we want to approximate our functions with finite polynomials. That's really easy - we just cut off the series after a finite number of terms:     The degree Maclaurin polynomial of a function is      Note that the degree Maclaurin polynomial will generally consist of terms. However, it will have degree less than if the coefficient of equals zero, for example   The degree 0 Maclaurin polynomial of is not very interesting, it's the just the constant function .  You'll recognise the degree 1 Maclaurin polynomial : its graph is the tangent to at . We also call it the linear approximation to , it is the linear function that most closely approximates near .  Similarly, the degree 2 Maclaurin polynomial is called the quadratic approximation to . It is the quadratic function closest to near .  The following Sage cell let's you plot the Maclaurin polynomials for and :    Computer algebra systems  Computer Algebra Systems usually have a command for calculating Maclaurin series. For example, the following shows part of the output from a Wolfram Alpha query.     We have already seen Sage code to compute Maclaurin series, here is the simplest code:         Advanced Topics   Computing     It's not hard to show, using repeated differentiation, that the Maclaurin series for is Since , this gives us an infinite series converging to :    As you can see from this computation, convergence is extremely slow. See how big you must make N in the above code before you get two correct digits after the decimal point.  One can compute much faster by using identities such as the following, due to John Machin (in 1706):    Modern algorithms to compute are more sophisticated and much faster still, see . We mention only one method, the BBP (Bailey-Borwein-Plouffe) Algorithm: This formula not only converges extremely quickly, but it also allows you to compute specific hexadecimal digits of without first computing the previous digits.     A function without Maclaurin series  Consider the function This function is well-defined and continuous at - you can compute the limit    Plot of   Plot of    One can show that this function is well-defined and differentiable, in fact for we have (check this yourself): The plot in is suspiciously flat near , and in fact we have Therefore, the Maclaurin series for is identically zero! So this function does not equal its Maclaurin series.  Replacing by in the power series for , we get This is not strictly a power series, but a Laurent series , which converges for .   Here we see that the partial sums approximate well for large , but not for small .    Other types of series  For one can show that the following infinite series converges: This defines the zeta-function , a fascinating function defined by a series other than a power series. Later we will see that is related to the distribution of prime numbers. When is an even integer, it takes on very interesting values: Its values at the odd integers are much more mysterious.    Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .     Infinite products  Instead of adding infinitely many terms, one might also multiply them. Thus one may express some functions as infinite products, for example Such products can only converge if the factors tend to (not 0!) as tends to infinity.  You can plot the finite products against and in the following Sage cells:     Try out your own Sage computations here:    "
},
{
  "id": "Sec-Introduction-5-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#Sec-Introduction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorial "
},
{
  "id": "Sec-Introduction-5-3",
  "level": "2",
  "url": "Chap-Calculus_1.html#Sec-Introduction-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Challenge: "
},
{
  "id": "Sec-Infinite_Series-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#Sec-Infinite_Series-2",
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
  "id": "sec-Power-Series-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Power-Series-2",
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
  "id": "sec-Maclaurin-Series-4",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Series-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": " Use induction on to prove that the expression in is correct.  "
},
{
  "id": "sec-Maclaurin-Series-5",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Series-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Maclaurin series "
},
{
  "id": "sec-Maclaurin-Series-7",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Series-7",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": "  Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to odd powers of , and odd numbers are of the form . The then ensures the alternating signs.   "
},
{
  "id": "sec-Maclaurin-Series-8",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Series-8",
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
  "id": "sec-Maclaurin-Polynomials-3",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Polynomials-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree Maclaurin polynomial "
},
{
  "id": "sec-Maclaurin-Polynomials-6",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Polynomials-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear approximation "
},
{
  "id": "sec-Maclaurin-Polynomials-7",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Polynomials-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic approximation "
},
{
  "id": "sec-Maclaurin-Polynomials-10",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Polynomials-10",
  "type": "Remark",
  "number": "1.9",
  "title": "Computer algebra systems.",
  "body": " Computer algebra systems  Computer Algebra Systems usually have a command for calculating Maclaurin series. For example, the following shows part of the output from a Wolfram Alpha query.     We have already seen Sage code to compute Maclaurin series, here is the simplest code:   "
},
{
  "id": "fig-exp-minus-1-over-x-squared",
  "level": "2",
  "url": "Chap-Calculus_1.html#fig-exp-minus-1-over-x-squared",
  "type": "Figure",
  "number": "1.11",
  "title": "",
  "body": " Plot of   Plot of   "
},
{
  "id": "subsec-A-function-without-Maclaurin-series-5",
  "level": "2",
  "url": "Chap-Calculus_1.html#subsec-A-function-without-Maclaurin-series-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laurent series "
},
{
  "id": "subsec-Other-types-of-series-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#subsec-Other-types-of-series-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zeta-function "
},
{
  "id": "subsec-Other-types-of-series-3",
  "level": "2",
  "url": "Chap-Calculus_1.html#subsec-Other-types-of-series-3",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .  "
},
{
  "id": "Calculus_2",
  "level": "1",
  "url": "Calculus_2.html",
  "type": "Chapter",
  "number": "2",
  "title": "CA2: Taylor Series",
  "body": "    CA2: Taylor Series         Taylor series   Plot of and its degree 5 Maclaurin polynomial.   Plot of and its degree 5 Maclaurin polynomial. The polynomial starts diverging visibly from the plot of when .     compares to its degree 5 Maclaurin polynomial. We notice that the polynomial is a poor approximation of when . What can we do about this? We could use Maclaurin polynomials of ever higher degree, but these get ever more complicated.  The issue is that Maclaurin series are computed based on the value of the function and its derivatives around , so it's not surprising that they best approximate the function near If for some reason we're more interested in the function near another value, say near , then instead of computing Maclaurin polynomials of high degree, we can simply shift our function along the -axis until the point of interest lies above , compute the Maclaurin polynomials of the shifted function, and then shift back.  In other words, we consider the shifted function , then compute the Maclaurin series for : Finally, we shift back to obtain a power series for : This is the Taylor series for  centred at  .   Taylor Series   The series,   .  is called the Taylor series for about     Note that a Maclaurin series is simply a Taylor series centred at   The degree  Taylor polynomial of centred at is - you guessed it - the sum of the terms of the Taylor series of degree at most . The degree Taylor polynomial of a function is also called its nth order approximation .    Compute the Taylor series of the function centred at .    We compute the derivatives of at : Thus      Degree 3 Taylor polynomial of centred at   Plot of and its degree 3 Taylor polynomial centered at .      Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is      Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is      Example Tasks   Find the Taylor series for about     Find the Taylor polynomial of degree for about     Find the Taylor polynomial of degree for about     Find the rd degree Taylor polynomial for about      A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.        Geometric series  So far, we have succeeded in finding various useful power series expressions for the functions , and . What about other functions? A particularly instructive case is the function   We can compute its derivatives by hand, but that quickly gets old, so we'll ask the computer instead:   We notice that (Note that Sage often formats the answer differently, swapping the and around, leading to alternating signs.)   Use induction on to prove that the formula in is correct.   This allows us to write down the Maclaurin series for :    Prove that, for every , Deduce that    You can use induction on , or just multiply out and cancel terms.   Assuming that , deduce from .   Take the limit as .   We compute since as because .    The series in is an example of a geometric series (sometimes also called a geometric progression ). More generally, a geometric series is one of the form Here is the starting term, and each subsequent term equals the previous terms multiplied by ; we call the common ratio .  Let's plot the various Maclaurin polynomials for :   Maclaurin polynomials for   Plot of the Maclaurin polynomials for . Note how they only approximate when .    We immediately notice that the Maclaurin polynomials are wildy different from when .    Convergence issues  Of course, the problem is that the series does not converge unless - after all, if , then the individual terms do not shrink to zero, and the partial sums cannot converge to a limit. This is true for all series:   The Divergence Test   If the terms of the series do not approach as then the series diverges.    This is obvious if you think about it: if the series converges, then the partial sums (running totals) tend to some fixed limit. But this means that the changes from one partial sum to the next (i.e. the terms of the series) must shrink to zero.  We will soon see that the converse is not true: there are series, whose terms tend to zero, but which nevertheless diverge. One can think of this problem as the terms not tending to zero fast enough.    Geometric Series   A geometric series converges if and only if , in which case it converges to      If , then does not equal zero, so by the Divergence Test, the series diverges.  Now suppose that . By the result of , we have So since as because .    Repeating decimals are also geometric series:      Ratio test  Most series aren't obligingly geometric series, but a similar principle applies: if the ratios of consecutive terms stay small (specifically, tend to a value strictly between and ), then we can expect convergence:   The Ratio Test   For the series , let . If  then the series converges  then the series diverges  then the test is inconclusive       We can actually do slightly better: in the Ratio Test we can replace by .  If you don't yet know what a limsup is, here is another way of putting it: If there exists a number , such that for all sufficiently large , then the series converges.  The idea is simply that, in this case, the terms in the series shrink to zero faster than the terms of a (convergent) geometric series with common ratio , and thus it must also converge.   In other courses you will learn more about convergence of series and in particular you will see more convergence tests. Annoyingly, all convergence tests have cases in which they're inconclusive. One can actually prove that, in a suitable technical sense, a universal convergence test cannot exist.    Determine the nature of the series     Convergent.    To use the ratio test consider   Thus   Since , by the ratio test this series converges. (Notice that the ratio test doesn't tell us to what number the series converges to. In this case it happens to be .)      Convergence of power series  It turns out that the Ratio Test is well suited for testing the convergence of power series. Consider a general power series, of the form We'd like to know for which values of this series converges. After all, if the series doesn't converge for a particular , then it tells us nothing about the value of the function at .  Firstly, when , then obviously converges to the first term . In other words, a power series always converges at its centre.   For other values of , we apply the Ratio Test. To do so, we check the (absolute values of) ratios of consecutive terms, and try to determine if they converge to something smaller than 1. Due to the nature of power series, there is some cancellation in this ratio: For the Ratio Test to apply, this must converge to some as . This depends on the ratios of the coefficients of the power series. Assuming the ratios converge to something, we find three possibilities.   Case 1. If then the series converges for all :   Consider the Maclaurin series for : Here Thus the Maclaurin series for converges for all values of .  It's not hard to show that the same holds for the Taylor series of , and about any centre. The reason is that the derivatives are bounded (by in the case of , and by in the case of or ), thus in the Ratio Test calculation, the factorials in the denominators dominate everything.     Case 2. If then the series converges for and diverges if : This will converge if , i.e. when .  In this case, we call the radius of convergence of the power series. Basically, the series converges if the distance from to the centre is less than the radius of convergence . If this distance is greater than , then the series diverges.  In other words, the series converges for inside the open interval , and diverges outside the closed interval .  What happens on the endpoints of these intervals, i.e. when ? The Ratio Test tells us nothing. All we know at this point is that there is an interval of convergence , of the form But we won't worry about convergence at the endpoints in this course.   Where's the circle?  Why is the radius of convergence called a radius? Where's the circle?  The answer becomes clear when we consider the variable to be a complex number, rather than just a real number. Everything we've done up to now also makes sense over complex number, especially power series, and in this case the interval of convergence turns out to be a disk of convergence. The series will converge for , and this region defines a disk in the complex plane, centered at , with radius .     Compute the radius of convergence of .    We use the Ratio Test: because Now when . So we find that the series converges for , i.e. on the interval , and the radius of convergence is .     Case 3. If then the series diverges for all : so unless . In this case we say the radius of convergence is zero: .  Just to round things off, in the first case, where the series converges for all , we say that it has infinite radius of convergence .       Algebra of infinite series  Computing repeated derivatives gets old really quickly. Often a much quicker way to get power series expansions for given functions is to manipulate a known series.  In below we have listed the Maclaurin series for a small set of basic functions of science and engineering. These series can all be relatively easily derived from first principals as discussed in previous lectures. However, for some more complex functions it is easier to find their Maclaurin series by starting from known series rather than trying to find the series from scratch. We will look at two commonly used techniques:    Manipulating\/Substituting into known series.  Differentiating\/Integrating known series.     Some Important Maclaurin Series (and their intervals of convergence):                                     Manipulating\/Substituting into Known Series    Find the Maclaurin series for        We know that the Maclaurin series for on is   We can use this series by replacing with to obtain   which will converge on the interval i.e.,       Find the Maclaurin series for        Once again we will use the Maclaurin series for on Now   which will converge on the interval i.e.,       Find the Maclaurin series for        Substituting into the Maclaurin series for , we obtain   which will converge for all real values of     Differentiating\/Integrating Known Series  As the theorem below says, we can also use differentiation and integration to work out new Maclaurin series expansions from ones that we already know. The proof of this theorem is beyond the scope of this course.    If with radius of convergence then    with radius of convergence ,  with radius of convergence (where ).     Note that the behaviour of the series (i.e. whether it converges or diverges) at the endpoints may change when it is differentiated or integrated.    Find the Maclaurin series for        Notice that or put the other way, Since we know the Maclaurin series for we can differentiate this series to obtain the Maclaurin series for So, on        Find the Maclaurin series for        Notice that or put the other way, . Since we know the Maclaurin series for we can integrate this series to obtain the Maclaurin series for So, on    Since is when we have Thus on       Example Tasks   Find the Maclaurin series for     Find the Maclaurin series for     Find the Maclaurin series for     Find the Maclaurin series for     Use a sixth degree Maclaurin polynomial to estimate       Advanced topics   Why radius 1?  In we worked out the Maclaurin series of and found that it has radius of convergence .  What's wrong with this function? The plot in shows a perfectly well-behaved function, defined on all of , but its Maclaurin polynomials are all over the place when . Why is the radius of convergence so small?   Approximations to by its Maclaurin polynomials up to degree 30.   A plot of together with plots of its Maclaurin polynomials up to degree 30.    The answer becomes clear if we view as a function of a complex variable! Over the complex numbers, the denominator vanishes at , so the function blows up at these values. These are at distance 1 from the origin, so the disc of convergence in the complex plane cannot include these points, and so the radius of this disc (the radius of convergence!) cannot be larger than 1.  In fact, it is a result from Complex Analysis that the radius of convergence of the Taylor series of an analytic function is always the distance from the centre of the Taylor series to the nearest singularity of the function. In our case, this distance is 1.      "
},
{
  "id": "fig-plot-sin-T5",
  "level": "2",
  "url": "Calculus_2.html#fig-plot-sin-T5",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " Plot of and its degree 5 Maclaurin polynomial.   Plot of and its degree 5 Maclaurin polynomial. The polynomial starts diverging visibly from the plot of when .   "
},
{
  "id": "sec-Taylor-series-5",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor series centred at "
},
{
  "id": "sec-Taylor-series-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-6",
  "type": "Definition",
  "number": "2.2",
  "title": "Taylor Series.",
  "body": " Taylor Series   The series,   .  is called the Taylor series for about    "
},
{
  "id": "sec-Taylor-series-8",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor polynomial nth order approximation "
},
{
  "id": "sec-Taylor-series-9",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-9",
  "type": "Example",
  "number": "2.3",
  "title": "",
  "body": "  Compute the Taylor series of the function centred at .    We compute the derivatives of at : Thus    "
},
{
  "id": "fig-plot-cos-T3",
  "level": "2",
  "url": "Calculus_2.html#fig-plot-cos-T3",
  "type": "Figure",
  "number": "2.4",
  "title": "",
  "body": " Degree 3 Taylor polynomial of centred at   Plot of and its degree 3 Taylor polynomial centered at .   "
},
{
  "id": "Second_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Calculus_2.html#Second_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "2.5",
  "title": "",
  "body": " Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is    "
},
{
  "id": "Fourth_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Calculus_2.html#Fourth_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "2.6",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is    "
},
{
  "id": "sec-Taylor-series-14-2",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-14-2",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Find the Taylor series for about   "
},
{
  "id": "sec-Taylor-series-14-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-14-3",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "sec-Taylor-series-14-4",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-14-4",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "sec-Taylor-series-14-5",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-14-5",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Find the rd degree Taylor polynomial for about   "
},
{
  "id": "sec-Taylor-series-15",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-15",
  "type": "Remark",
  "number": "2.7",
  "title": "A little remark.",
  "body": " A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.     "
},
{
  "id": "sec-Geometric-series-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Geometric-series-6",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "",
  "body": " Use induction on to prove that the formula in is correct.  "
},
{
  "id": "ex-GS",
  "level": "2",
  "url": "Calculus_2.html#ex-GS",
  "type": "Checkpoint",
  "number": "2.10",
  "title": "",
  "body": " Prove that, for every , Deduce that    You can use induction on , or just multiply out and cancel terms.   Assuming that , deduce from .   Take the limit as .   We compute since as because .  "
},
{
  "id": "sec-Geometric-series-9",
  "level": "2",
  "url": "Calculus_2.html#sec-Geometric-series-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series common ratio "
},
{
  "id": "fig-plot-GS",
  "level": "2",
  "url": "Calculus_2.html#fig-plot-GS",
  "type": "Figure",
  "number": "2.11",
  "title": "",
  "body": " Maclaurin polynomials for   Plot of the Maclaurin polynomials for . Note how they only approximate when .   "
},
{
  "id": "sec-Convergence-issues-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-3",
  "type": "Theorem",
  "number": "2.12",
  "title": "The Divergence Test.",
  "body": " The Divergence Test   If the terms of the series do not approach as then the series diverges.   "
},
{
  "id": "sec-Convergence-issues-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-6",
  "type": "Theorem",
  "number": "2.13",
  "title": "Geometric Series.",
  "body": " Geometric Series   A geometric series converges if and only if , in which case it converges to    "
},
{
  "id": "sec-Convergence-issues-7",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-7",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " If , then does not equal zero, so by the Divergence Test, the series diverges.  Now suppose that . By the result of , we have So since as because .  "
},
{
  "id": "sec-Convergence-issues-8",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-8",
  "type": "Example",
  "number": "2.14",
  "title": "",
  "body": " Repeating decimals are also geometric series:   "
},
{
  "id": "sec-Ratio-test-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Ratio-test-3",
  "type": "Theorem",
  "number": "2.15",
  "title": "The Ratio Test.",
  "body": " The Ratio Test   For the series , let . If  then the series converges  then the series diverges  then the test is inconclusive     "
},
{
  "id": "Ex-Ratio_test",
  "level": "2",
  "url": "Calculus_2.html#Ex-Ratio_test",
  "type": "Example",
  "number": "2.16",
  "title": "",
  "body": "  Determine the nature of the series     Convergent.    To use the ratio test consider   Thus   Since , by the ratio test this series converges. (Notice that the ratio test doesn't tell us to what number the series converges to. In this case it happens to be .)   "
},
{
  "id": "sec-Convergence-of-power-series-5",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-of-power-series-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case 1. "
},
{
  "id": "sec-Convergence-of-power-series-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-of-power-series-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case 2. "
},
{
  "id": "sec-Convergence-of-power-series-7",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-of-power-series-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radius of convergence "
},
{
  "id": "sec-Convergence-of-power-series-9",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-of-power-series-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval of convergence "
},
{
  "id": "sec-Convergence-of-power-series-11",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-of-power-series-11",
  "type": "Example",
  "number": "2.18",
  "title": "",
  "body": "  Compute the radius of convergence of .    We use the Ratio Test: because Now when . So we find that the series converges for , i.e. on the interval , and the radius of convergence is .   "
},
{
  "id": "sec-Convergence-of-power-series-12",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-of-power-series-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case 3. "
},
{
  "id": "sec-Convergence-of-power-series-13",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-of-power-series-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite radius of convergence "
},
{
  "id": "Table_Maclaurin",
  "level": "2",
  "url": "Calculus_2.html#Table_Maclaurin",
  "type": "Table",
  "number": "2.19",
  "title": "Some Important Maclaurin Series (and their intervals of convergence):",
  "body": " Some Important Maclaurin Series (and their intervals of convergence):                                    "
},
{
  "id": "Maclaurin_series_1_on_1_plus_x2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_1_on_1_plus_x2",
  "type": "Example",
  "number": "2.20",
  "title": "",
  "body": "  Find the Maclaurin series for        We know that the Maclaurin series for on is   We can use this series by replacing with to obtain   which will converge on the interval i.e.,    "
},
{
  "id": "Maclaurin_series_x_on_2_minus_5x",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_x_on_2_minus_5x",
  "type": "Example",
  "number": "2.21",
  "title": "",
  "body": "  Find the Maclaurin series for        Once again we will use the Maclaurin series for on Now   which will converge on the interval i.e.,    "
},
{
  "id": "Maclaurin_series_e_minus_x_2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_e_minus_x_2",
  "type": "Example",
  "number": "2.22",
  "title": "",
  "body": "  Find the Maclaurin series for        Substituting into the Maclaurin series for , we obtain   which will converge for all real values of    "
},
{
  "id": "sec-Algebra-of-infinite-series-12",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-12",
  "type": "Theorem",
  "number": "2.23",
  "title": "",
  "body": "  If with radius of convergence then    with radius of convergence ,  with radius of convergence (where ).    "
},
{
  "id": "Maclaurin_series_1_on_1_minus_x_power_2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_1_on_1_minus_x_power_2",
  "type": "Example",
  "number": "2.24",
  "title": "",
  "body": "  Find the Maclaurin series for        Notice that or put the other way, Since we know the Maclaurin series for we can differentiate this series to obtain the Maclaurin series for So, on     "
},
{
  "id": "Maclaurin_series_ln_1_plus_x",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_ln_1_plus_x",
  "type": "Example",
  "number": "2.25",
  "title": "",
  "body": "  Find the Maclaurin series for        Notice that or put the other way, . Since we know the Maclaurin series for we can integrate this series to obtain the Maclaurin series for So, on    Since is when we have Thus on     "
},
{
  "id": "sec-Algebra-of-infinite-series-16-2",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-2",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-3",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-4",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-4",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-5",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-5",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-6",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": " Use a sixth degree Maclaurin polynomial to estimate   "
},
{
  "id": "fig-1-over-x-squared",
  "level": "2",
  "url": "Calculus_2.html#fig-1-over-x-squared",
  "type": "Figure",
  "number": "2.26",
  "title": "",
  "body": " Approximations to by its Maclaurin polynomials up to degree 30.   A plot of together with plots of its Maclaurin polynomials up to degree 30.   "
},
{
  "id": "Calculus_3",
  "level": "1",
  "url": "Calculus_3.html",
  "type": "Chapter",
  "number": "3",
  "title": "CA3: Functions of Several Variables",
  "body": "    CA3: Functions of Several Variables            Functions of Two Variables  In Math1110 we studied \"(real valued) functions of one variable\", that is functions of the form, where is called the domain. We used the notation to denote such functions where denotes the independent variable and the dependent variable.  We have seen that functions of one variable are useful in practice but (of course) there are many real world relationships that are more complicated and can't be well modelled by these functions.   Suppose that we have a thin metal plate and that we are interested in the temperature on this plate. In general the temperature will vary from point to point. If we imagine a coordinate grid on the plate then points on the plate can be identified by their coordinates . Thus will depend on two independent variables, and . Thus we would write and say that is a function of two variables.    Many of the formulas you've come across in school are actually functions of several variables, such as:   The kinetic energy of an object of mass and velocity is given by the two-variable function     The value of a investment compounded continuously at an annual rate of after years is given by the two-variable function     The magnitude of the gravitational attraction between two objects of masses and , separated by a distance of , is given by the three variable function where is the universal gravitational constant .      Note that functions of two variables are of the form where is again the domain. Formally, we define a function of two variables as:   A (real valued) function of two variables is a rule that assigns to each ordered pair of real numbers in a set a unique (real) number denoted by .  Thus,  are examples of functions of two variables.  The set is called the domain of the function. Unless specified otherwise, we take to be the largest possible set of inputs for which we can calculate . The range of is the associated set of values that takes on.   Consider the function .   Find the domain of  Find:                (to 4.d.p.).  is not defined.       Since the argument of the log function has to be positive, the domain is the set of points in the plane satisfying . Figure shows a plot of this domain in .        (to 4.d.p.).  Since is not in the domain of , is not defined.      Domain of the function   A plot of the domain of the function .     Consider the function    Find the domain of  Find:                      Since we can calculate for all values of and the domain of is                  Graphing functions of two variables  Now that we have an idea of what a function of two variables is and what its domain is, we would like a way to visualise it, similar to how we can visualise functions of a single variable by graphing them in the plane.  The two main visualisations are graphs and contour plots. We deal with contour plots in the next section. The graph of a function of two variables is the surface in defined by Thus, we imagine the \"floor\" to be the -plane of inputs to the function, and the height of the surface above (or below) this floor is the output .  A surface in is the graph of a function if and only if it passes the vertical line test, since a function only produces one output for each input in its domain.  In general it is hard to draw the graph of a function of two variables by hand and so usually we get a computer to do it. Various computer packages can produce such plots, such as Maple, Mathematica, Matlab, Wolfram Alpha and even GPT4 (which runs python code to produce the plots). The following plots are produced by SageMath - you can run the code cells to produce 3D plots which you can manipulate yourself.   Produce the graph of the function      This surface is an example of a paraboloid . It is used for satellite antennas.     Produce the graph of the function      This surface is an example of a hyperbolic paraboloid .     Produce the graph of the function             Produce the graph of the function            Not all surfaces in represent the graph of a function of two variables.   The surface associated the equation is a sphere of radius and whose centre is the origin. Clearly this surface does not pass the vertical line test. For example, when , could be either or .       Example Tasks   Determine the domain of the function .    Sketch the graph of the following functions.              Level Curves and Contour Plots  As we have seen, visualising the surface corresponding to the function can be quite difficult, in particular if you're limited to a static image in two dimensions (such as printed on paper). Another way to visualise a function of two variables is to use a contour plot . Here one plots contours, also known as level curves, each of which consists of all the input points for which the output is a certain constant value. This is commonly used in topographic maps, where the contours show points on the map of a given altitude. With a bit of practise, you can visualise the shape of the landscape just from a topographic map.  Sample Topographic Map (Part of the Watagan Mountains)     The level curves of a function are curves in the -plane on which the function has the same value, i.e. on which , where is some constant.  Note:  Each point in the domain of the function lies on exactly one level curve.  When a collection of level curves for a function are drawn on the same plane it is also called a contour plot.  We can also think of level curves as the intersection of the surface and the horizontal plane .     Draw the level curves associated with for the function    The level curves of a function satisfy the equation . So for this function the level curves are: Thus the level curves are rectangular hyperbolae (except for ). The level curves for are shown in following diagram.        Draw a contour plot for the function .   The contours (i.e. level curves) of a function satisfy the equation . So for this function the level curves are: that is, circles centred on the origin and whose radius is .   Notice that there are no level curves when . This tells us that the surface does not go below the -plane.    Here is a SageMath cell that lets you compare graphs and contour plots of different functions. Note that if you fill in the regions between the contours with colours related to the output values you get a colourful plot known as a heat map .    Example Tasks   Draw the level curves associated with for the function .    Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:       Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:             Surfaces of Revolution  The surface associated with the graph of (see ) is an example of a special kind of surface... a surface of revolution. A surface of revolution is a surface in obtained by rotating a curve about an axis.   Suppose we have a curve in the -plane, and we rotate this curve above the -axis. What would be an equation for the resulting surface of revolution?  Consider a point on the curve above the -axis in 3D space. Its height above the -plane is . As we rotate the curve about the -axis, the point traces out a horizontal circle on the resulting surface of revolution. The radius of this circle equals the original -coordinate of the point when it started above the -axis, and the height of the circle above the -plane equals . The height of an arbitrary point on the surface of revolution is thus , where is the radius of the circle on which the point lies. This tells us that an equation for the surface of revolution is Another way to see this is that, as a result of the rotational symmetry of the surface, the height of the surface above a point on the -plane depends only on the distance of the point from the origin.  The following SageMath code shows the partial surface of revolution obtained by rotating the curve about the -axis.    Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.           Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.         The equation of the surface of revolution will be that is,      Is the graph of a surface of revolution?   Since we can write the function as this surface can be obtained by rotating the curve in the -plane      Example Tasks   Determine the equation of the surface obtained by rotating the curve about the -axis. Make a sketch of the surface.    Is the graph of a surface of revolution?          Functions of 3 (or more) Variables  Although we won't do much with them in this course it is possible to define (real valued) functions in variables where is any natural number, that is functions of the form .   The function is a function of the form .    The function is a function of the form .   Visualising such functions is difficult. One option to visualise a function of three variables is to make 3D plots of its level surfaces . These are the surfaces defined by for various values of the constant . This is the same idea as plotting level curves, except now we're in one dimension higher.   The following SageMath cell displays three level surfaces of the function for     We will see later in the course that, rather than using level surfaces to gain understanding a given function, we can gain understanding of a given surface by viewing it as the level surface of a function.    "
},
{
  "id": "Functions-of-Two-Variables-4",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-4",
  "type": "Example",
  "number": "3.1",
  "title": "",
  "body": " Suppose that we have a thin metal plate and that we are interested in the temperature on this plate. In general the temperature will vary from point to point. If we imagine a coordinate grid on the plate then points on the plate can be identified by their coordinates . Thus will depend on two independent variables, and . Thus we would write and say that is a function of two variables.  "
},
{
  "id": "Functions-of-Two-Variables-5",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-5",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": " Many of the formulas you've come across in school are actually functions of several variables, such as:   The kinetic energy of an object of mass and velocity is given by the two-variable function     The value of a investment compounded continuously at an annual rate of after years is given by the two-variable function     The magnitude of the gravitational attraction between two objects of masses and , separated by a distance of , is given by the three variable function where is the universal gravitational constant .     "
},
{
  "id": "Functions-of-Two-Variables-7",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-7",
  "type": "Definition",
  "number": "3.3",
  "title": "",
  "body": " A (real valued) function of two variables is a rule that assigns to each ordered pair of real numbers in a set a unique (real) number denoted by . "
},
{
  "id": "Functions-of-Two-Variables-9",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain range "
},
{
  "id": "Functions-of-Two-Variables-10",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-10",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": " Consider the function .   Find the domain of  Find:                (to 4.d.p.).  is not defined.       Since the argument of the log function has to be positive, the domain is the set of points in the plane satisfying . Figure shows a plot of this domain in .        (to 4.d.p.).  Since is not in the domain of , is not defined.    "
},
{
  "id": "fig-domain1",
  "level": "2",
  "url": "Calculus_3.html#fig-domain1",
  "type": "Figure",
  "number": "3.5",
  "title": "",
  "body": " Domain of the function   A plot of the domain of the function .   "
},
{
  "id": "Functions-of-Two-Variables-12",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-12",
  "type": "Example",
  "number": "3.6",
  "title": "",
  "body": " Consider the function    Find the domain of  Find:                      Since we can calculate for all values of and the domain of is           "
},
{
  "id": "graphs-6",
  "level": "2",
  "url": "Calculus_3.html#graphs-6",
  "type": "Example",
  "number": "3.7",
  "title": "",
  "body": " Produce the graph of the function      This surface is an example of a paraboloid . It is used for satellite antennas.   "
},
{
  "id": "graphs-7",
  "level": "2",
  "url": "Calculus_3.html#graphs-7",
  "type": "Example",
  "number": "3.8",
  "title": "",
  "body": " Produce the graph of the function      This surface is an example of a hyperbolic paraboloid .   "
},
{
  "id": "graphs-8",
  "level": "2",
  "url": "Calculus_3.html#graphs-8",
  "type": "Example",
  "number": "3.9",
  "title": "",
  "body": " Produce the graph of the function           "
},
{
  "id": "Example-6-Calc-3",
  "level": "2",
  "url": "Calculus_3.html#Example-6-Calc-3",
  "type": "Example",
  "number": "3.11",
  "title": "",
  "body": " Produce the graph of the function           "
},
{
  "id": "graphs-11",
  "level": "2",
  "url": "Calculus_3.html#graphs-11",
  "type": "Example",
  "number": "3.13",
  "title": "",
  "body": " The surface associated the equation is a sphere of radius and whose centre is the origin. Clearly this surface does not pass the vertical line test. For example, when , could be either or .     "
},
{
  "id": "graphs-12-2",
  "level": "2",
  "url": "Calculus_3.html#graphs-12-2",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": " Determine the domain of the function .  "
},
{
  "id": "graphs-12-3",
  "level": "2",
  "url": "Calculus_3.html#graphs-12-3",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " Sketch the graph of the following functions.      "
},
{
  "id": "level-curves-2",
  "level": "2",
  "url": "Calculus_3.html#level-curves-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contour plot "
},
{
  "id": "level-curves-3",
  "level": "2",
  "url": "Calculus_3.html#level-curves-3",
  "type": "Definition",
  "number": "3.16",
  "title": "",
  "body": "The level curves of a function are curves in the -plane on which the function has the same value, i.e. on which , where is some constant. "
},
{
  "id": "level-curves-5",
  "level": "2",
  "url": "Calculus_3.html#level-curves-5",
  "type": "Example",
  "number": "3.17",
  "title": "",
  "body": " Draw the level curves associated with for the function    The level curves of a function satisfy the equation . So for this function the level curves are: Thus the level curves are rectangular hyperbolae (except for ). The level curves for are shown in following diagram.      "
},
{
  "id": "level-curves-6",
  "level": "2",
  "url": "Calculus_3.html#level-curves-6",
  "type": "Example",
  "number": "3.19",
  "title": "",
  "body": " Draw a contour plot for the function .   The contours (i.e. level curves) of a function satisfy the equation . So for this function the level curves are: that is, circles centred on the origin and whose radius is .   Notice that there are no level curves when . This tells us that the surface does not go below the -plane.   "
},
{
  "id": "level-curves-7",
  "level": "2",
  "url": "Calculus_3.html#level-curves-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heat map "
},
{
  "id": "level-curves-8-2",
  "level": "2",
  "url": "Calculus_3.html#level-curves-8-2",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " Draw the level curves associated with for the function .  "
},
{
  "id": "level-curves-8-3",
  "level": "2",
  "url": "Calculus_3.html#level-curves-8-3",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:     "
},
{
  "id": "level-curves-8-4",
  "level": "2",
  "url": "Calculus_3.html#level-curves-8-4",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": " Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:     "
},
{
  "id": "surfaces-of-revolution-2",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "surface of revolution "
},
{
  "id": "surfaces-of-revolution-7",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-7",
  "type": "Example",
  "number": "3.24",
  "title": "",
  "body": " Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.        "
},
{
  "id": "surfaces-of-revolution-8",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-8",
  "type": "Example",
  "number": "3.26",
  "title": "",
  "body": " Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.         The equation of the surface of revolution will be that is,    "
},
{
  "id": "surfaces-of-revolution-9",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-9",
  "type": "Example",
  "number": "3.28",
  "title": "",
  "body": " Is the graph of a surface of revolution?   Since we can write the function as this surface can be obtained by rotating the curve in the -plane    "
},
{
  "id": "surfaces-of-revolution-10-2",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-10-2",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": " Determine the equation of the surface obtained by rotating the curve about the -axis. Make a sketch of the surface.  "
},
{
  "id": "surfaces-of-revolution-10-3",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-10-3",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": " Is the graph of a surface of revolution?  "
},
{
  "id": "functions-of-3-or-more-variables-3",
  "level": "2",
  "url": "Calculus_3.html#functions-of-3-or-more-variables-3",
  "type": "Example",
  "number": "3.29",
  "title": "",
  "body": " The function is a function of the form .  "
},
{
  "id": "functions-of-3-or-more-variables-4",
  "level": "2",
  "url": "Calculus_3.html#functions-of-3-or-more-variables-4",
  "type": "Example",
  "number": "3.30",
  "title": "",
  "body": " The function is a function of the form .  "
},
{
  "id": "functions-of-3-or-more-variables-5",
  "level": "2",
  "url": "Calculus_3.html#functions-of-3-or-more-variables-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "level surfaces "
},
{
  "id": "functions-of-3-or-more-variables-6",
  "level": "2",
  "url": "Calculus_3.html#functions-of-3-or-more-variables-6",
  "type": "Example",
  "number": "3.31",
  "title": "",
  "body": " The following SageMath cell displays three level surfaces of the function for    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
