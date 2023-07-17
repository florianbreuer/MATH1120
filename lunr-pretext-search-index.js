var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Chap-Calculus_1",
  "level": "1",
  "url": "Chap-Calculus_1.html",
  "type": "Chapter",
  "number": "1",
  "title": "CA1: Maclaurin Series",
  "body": "    CA1: Maclaurin Series            Introduction   Faster multiplication  There are actually multiplication algorithms which are significantly faster than long multiplication. Long multiplication of of two -digit numbers will typically take single-digit multiplications (and another  -digit additions). The fastest known algorithm is due to David Harvey and Joris van der Hoeven, and requires a number of steps proportional to , which for large value of is a significant improvement.   Have you ever wondered how computers actually calculate things? Computers can only ever do finitely many steps with finitely many bits of information. The inputs in a calculation are numbers represented by finitely many (decimal or binary) digits, for example and . You probably learned in primary school how to do long addition or multiplication with pencil and paper, and you could imagine that your computer might follow a similar algorithm and compute in a finite number of steps. But then how does it calculate or , or other non-polynomial functions?  The solution is to approximate the function using a power series . For example, the computer approximates by adding finitely many terms of in other words, it approximates the function  via the power series     Factorials  Here is  factorial . It grows really fast: The factorial satifies the useful property that , meaning that fractions with factorials in the numerator and denominator will often allow lots of cancellation.   Challenge: Determine the number of zeroes at the end of the decimal expression for    How does the computer know how many of these terms to add? The short answer is: as many as needed to get the required level of accuracy. The long answer is much more complicated, and is the subject of a whole other area of Mathematics called Numerical Analysis .  How does the computer know to use this particular series? And what even is a series? That's what we'll learn in this chapter!       Infinite Series  Let's look carefully at the calculation . We will add the terms one by one and keep an eye on the cumulative total, more formally known as the partial sums :    Number of Terms  Partial Sum  Value                                  If you're viewing this online, you can compute this yourself by running the following Sage cell:   This computation is actually quite inefficient, since we're calculating each term from scratch. Notice that the term is obtained by multiplying the previous term by : Firstly, this allows us to calculate the sum more efficiently:  Efficiency  We do we care about efficiency? Aren't modern computers plenty fast enough? For this example, yes. But there are often cases where we need to compute efficiently, for example in mobile devices with limited power, or calculations that need to be repeated millions of times per second, for example in computer graphics.   Secondly, as we add more terms, gets ever bigger while stays the same, so the multiplier we use to get from one term to the next gets ever smaller. This means that the terms shrink to zero exponentially and we will see in the next chapter LINK! that the sum converges for every value of .  In the above calculation, we have only computed finitely many terms, which is all one ever needs for applications. Mathematically, however, is an infinite series, and its value represents the sum of all infinitely many terms. What can this mean?  We have seen that the partial sums tend to , and this limit is defined to the be sum of the infinite series:     Given a sequence  of real numbers (the terms), we define the series  to be the limit of the partial sums (running totals) of the terms, provided that this limit exists.  If the limit exists, we say that the series converges , otherwise it diverges.     We will learn more about convergence and divergence in the next chapter. For now, we're interested in using infinite series to represent useful functions, like , or .       Power Series  Our first example above shows that the function can be expressed as an infinite series in the following form: Note that each term consists of a coefficient multiplied by some power of the variable, so this is an example of what we call a power series . Power series are particularly useful, as we can approximate them by the sum of the first few terms, which is then a polynomial. We're very comfortable with polynomials. Figure shows how the first few partial sums of the series approximate the function .  Approximation to by various partial sums of its power series   A plot of together with plots of the partial sums of its power series of degrees and .     Power series aren't the only way to represent interesting functions: there are also other types of series, infinite products, continued fractions...    Assuming for now that the series converges, how do we know this is even true? How does one find such a series?       Maclaurin Series  Let's suppose for the moment that a power series representation for a function  exists , but we don't know what the coefficients should be: We can find the value of the first coefficient by the clever trick of plugging into : What about the next coefficient? We use an even cleverer trick: differentiating the series kills the first coefficient and decreases the exponent in all other coefficients: Plugging into this gives us . Let's differentiate another time: so , next , etc. In general, we find   Maclaurin   Let be an open interval, and suppose that the power series converges to for . Then, for ,      Use induction on to prove that the expression in is correct.   The series expansion is called the Maclaurin series for the function .  So now that we know how to create power series for functions using their derivatives, let's do the same for two more important functions:    Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to odd powers of , and odd numbers are of the form . The then ensures the alternating signs.      Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to even powers of , and even numbers are of the form . The then ensures the alternating signs.    We record the Maclaurin series we have found thus far:        Euler's Formula  You may have noticed that the Maclaurin series for and all look very similar - the series for has exactly the same terms as the series for , except for the differences in signs.  It turns out we can fix these signs if we subsitute , where is the imaginary unit. Using the fact that we find that     Euler   For we have    In particular, if we set , we obtain the following amazing formula, which combines the five most important constants in Mathematics:   The most beautiful formula  A survey at the 2006 International Congress of Mathematicians in Madrid, Spain, asked delegates from all over the world what they thought was the most beautiful mathematical formula. The winner, by far, was Euler's formula .         Maclaurin Polynomials  Now we have a method for obtaining power series expressions for functions. But these are infinite series, and for most applications we want to approximate our functions with finite polynomials. That's really easy - we just cut off the series after a finite number of terms:     The degree Maclaurin polynomial of a function is      Note that the degree Maclaurin polynomial will generally consist of terms. However, it will have degree less than if the coefficient of equals zero, for example   The degree 0 Maclaurin polynomial of is not very interesting, it's the just the constant function .  You'll recognise the degree 1 Maclaurin polynomial : its graph is the tangent to at . We also call it the linear approximation to , it is the linear function that most closely approximates near .  Similarly, the degree 2 Maclaurin polynomial is called the quadratic approximation to . It is the quadratic function closest to near .  The following Sage cell let's you plot the Maclaurin polynomials for and :    Computer algebra systems  Computer Algebra Systems usually have a command for calculating Maclaurin series. For example, the following shows part of the output from a Wolfram Alpha query.     We have already seen Sage code to compute Maclaurin series, here is the simplest code:         Advanced Topics   Computing  It's not hard to show, using repeated differentiation, that the Maclaurin series for is Since , this gives us an infinite series converging to :    As you can see from this computation, convergence is extremely slow. See how big you must make N in the above code before you get two correct digits after the decimal point.  One can compute much faster by using identities such as the following, due to John Machin (in 1706):    Modern algorithms to compute are more sophisticated and much faster still, see . We mention only one method, the BBP (Bailey-Borwein-Plouffe) Algorithm: This formula not only converges extremely quickly, but it also also you to compute specific hexadecimal digits of without first computing the previous digits.     A function without Maclaurin series  Consider the function This function is well-defined and continuous at - you can compute the limit    Plot of   Plot of    One can show that this function is well-defined and differentiable, in fact for we have (check this yourself): The plot in is suspiciously flat near , and in fact we have Therefore, the Maclaurin series for is identically zero! So this function does not equal its Maclaurin series.  Replacing by in the power series for , we get This is not strictly a power series, but a Laurent series , which converges for .   Here we see that the partial sums approximate well for large , but not for small .    Other types of series  For one can show that the following infinite series converges: This defines the zeta-function , a fascinating function defined by a series other than a power series. Later we will see that is related to the distribution of prime numbers. When is an even integer, it takes on very interesting values: Its values at the odd integers are much more mysterious.   [Put in CA2??] Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .     Infinite products  Instead of adding infinitely many terms, one might also multiply them. Thus one may express some functions as infinite products, for example You can plot the finite products against and in the following Sage cells:      "
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
  "id": "p-11",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "LINK! "
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
  "id": "fig-exp-minus-1-over-x-squared",
  "level": "2",
  "url": "Chap-Calculus_1.html#fig-exp-minus-1-over-x-squared",
  "type": "Figure",
  "number": "1.11",
  "title": "",
  "body": " Plot of   Plot of   "
},
{
  "id": "p-58",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laurent series "
},
{
  "id": "p-60",
  "level": "2",
  "url": "Chap-Calculus_1.html#p-60",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zeta-function "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "Chap-Calculus_1.html#exercise-2",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": " [Put in CA2??] Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .  "
},
{
  "id": "Calculus_2",
  "level": "1",
  "url": "Calculus_2.html",
  "type": "Chapter",
  "number": "2",
  "title": "CA2: Taylor Series",
  "body": "    CA2: Taylor Series         Taylor series   Plot of and its degree 5 Maclaurin polynomial.   Plot of and its degree 5 Maclaurin polynomial. The polynomial starts diverging visibly from the plot of when .     compares to its degree 5 Maclaurin polynomial. We notice that the polynomial is a poor approximation of when . What can we do about this? We could use Maclaurin polynomials of ever higher degree, but these get ever more complicated.  The issue is that Maclaurin series are computed based on the value of the function and its derivatives around , so it's not surprising that they best approximate the function near If for some reason we're more interested in the function near another value, say near , then instead of computing Maclaurin polynomials of high degree, we can simply shift our function along the -axis until the point of interest lies above , compute the Maclaurin polynomials of the shifted function, and then shift back.  In other words, we consider the shifted function , then compute the Maclaurin series for : Finally, we obtain a power series for : This is the Taylor series for  centred at  .   Taylor Series   The series,   .  is called the Taylor series for about     Note that a Maclaurin series is simply a Taylor series centred at     Compute the Taylor series of the function centred at .    We compute the derivatives of at : Thus      Degree 3 Taylor polynomial of centred at   Plot of and its degree 3 Taylor polynomial centered at .      Geometric series  So far, we have succeeded in finding various useful power series expressions for the functions , and . What about other functions? A particularly instructive case is the function   We can compute its derivatives by hand, but that quickly gets old, so we'll ask the computer instead:   We notice that (Note that Sage often formats the answer differently, swapping the and around, leading to alternating signs.)   Use induction on to prove that the formula in is correct.   This allows us to write down the Maclaurin series for :    Prove that, for every , Deduce that    You can use induction on , or just multiply out and cancel terms.   Assuming that , deduce from .   Take the limit as .   We compute since as because .    The series in is an example of a geometric series (sometimes also called a geometric progression ). More generally, a geometric series is one of the form Here is the starting term, and each subsequent term equals the previous terms multiplied by ; we call the common ratio .  Let's plot the various Maclaurin polynomials for :   Maclaurin polynomials for   Plot of the Maclaurin polynomials for . Note how they only approximate when .    We immediately notice that the Maclaurin polynomials are wildy different from when .    Convergence issues  Of course, the problem is that the series does not converge unless - after all, if , then the individual terms do not shrink to zero, and the partial sums cannot converge to a limit. This is true for all series:   The Divergence Test   If the terms of the series do not approach as then the series diverges.    We will soon see that the converse is not true: there are series, whose terms tend to zero, but which nevertheless diverge. One can think of this problem as the terms not tending to zero fast enough.    Geometric Series   If the infinite series is a geometric series, i.e., of the form then it converges if and only if , in which case it converges to      If , then does not equal zero, so by the Divergence Test, the series diverges.  Now suppose that . By the result of , we have So since as as .    Repeating decimals are also geometric series:      Ratio test  Most series aren't obligingly geometric series, but a similar principle applies: if the ratios of consecutive terms remain below 1, we can expect convergence:   The Ratio Test   For the series , let . If  then the series converges  then the series diverges  then the test is inconclusive       We can actually do slightly better: in the Ratio Test we can replace by .  If you don't yet know what a limsup is, here is another way of putting it: If there exists a number , such that for all sufficiently large , then the series converges.  The idea is simply that, in this case, the terms in the series shrink to zero faster than the terms of a (convergent) geometric series with common ratio , and thus it must also converge.   In other courses you will learn more about convergence of series and in particular you will see more convergence tests. Annoyingly, all convergence tests have cases in which they're inconclusive. One can actually prove that, in a suitable technical sense, a universal convergence test cannot exist.    Determine the nature of the series     Convergent.    To use the ratio test consider   Thus   Since , by the ratio test this series converges. (Notice that the ratio test doesn't tell us to what number the series converges to. In this case it is .)      Convergence of power series  It turns out that the Ratio Test is well suited for testing the convergence of power series. Consider a general power series, of the form We'd like to know for which values of this series converges.  Firstly, when , then obviously converges to the first term . In other words, a power series always converges at its centre.  For other values of , we apply the Ratio Test. To do so, we check the (absolute values of) ratios of consecutive terms, and try to determine if they converge to something smaller than 1. Due to the nature of power series, there is some cancellation in this ratio: For the Ratio Test to apply, this must converge to some as . This depends on the ratios of the coefficients of the power series. Assuming the ratios converge to something, we find three possibilities.   Case 1. If then the series converges for all :   Consider the Maclaurin series for : Here Thus the Maclaurin series for converges for all values of .  It's not hard to show that the same holds for the Taylor series of , and about any centre. The reason is that the derivatives are bounded (by in the case of , and by in the case of or ), thus in the Ratio Test calculation, the factorials in the denominators dominate everything.     Case 2. If then the series converges for and diverges if : This will converge if , i.e. when .  In this case, we call the radius of convergence of the power series. Basically, the series converges if the distance from to the centre is less than the radius of convergence . If this distance is greater than , then the series diverges.  In other words, the series converges for inside the open interval , and diverges outside the closed interval . What happens on the endpoints of these intervals, i.e. when ? The Ratio Test tells us nothing. All we know at this point is that there is an interval of convergence , of the form     Algebra of infinite series  Computing repeated derivatives gets old really quickly. Often a much quicker way to get power series expansions for given functions is to manipulate know series algebraically... or by differentiating term-by-term.    Advanced topics   Integral test    Absolute vs. conditional convergence  Rearrangement of conditionally convergent series can make your head explode.    Convergence in the complex plane    The Euler product of the zeta function        OLD STUFF - Generating New Series from Known Series  In below we have listed the Maclaurin series for a small set of basic functions of science and engineering. These series can all be relatively easily derived from first principals as discussed in previous lectures. However, for some more complex functions it is easier to find their Maclaurin series by starting from known series rather than trying to find the series from scratch. We will look at two commonly used techniques.    Manipulating\/Substituting into known series.   Differentiating\/Integrating known series.      Some Important Maclaurin Series:                                     Manipulating\/Substituting into Known Series    Find the Maclaurin series for        We know that the Maclaurin series for on is   We can use this series by replacing with to obtain   which will converge on the interval i.e.,       Find the Maclaurin series for        Once again we will use the Maclaurin series for on Now   which will converge on the interval i.e.,       Find the Maclaurin series for        Substituting into the Maclaurin series for , we obtain   which will converge for all real values of     Differentiating\/Integrating Known Series  As the theorem below says, we can also use differentiation and integration to work out new Maclaurin series expansions from ones that we already know. The proof of this theorem is beyond the scope of this course.    If with radius of convergence then    with radius of convergence ,  with radius of convergence (where ).     Note that the behaviour of the series (i.e. whether it converges or diverges) at the endpoints may change when it is differentiated or integrated.    Find the Maclaurin series for        Notice that or put the other way, Since we know the Maclaurin series for we can differentiate this series to obtain the Maclaurin series for So, on        Find the Maclaurin series for        Notice that or put the other way, . Since we know the Maclaurin series for we can integrate this series to obtain the Maclaurin series for So, on    Since is when we have Thus on       Example Tasks   Find the Maclaurin series for     Find the Maclaurin series for     Find the Maclaurin series for     Find the Maclaurin series for     Use a sixth degree Maclaurin polynomial to estimate       Taylor Series  Maclaurin series are power series about However we can follow exactly the same process to find a power series expansion for a function about any point We call these power series Taylor Series.   Taylor Series   The series,   .  is called the Taylor series for about     Note that:    We can construct the Taylor series about for any function that is infinitely differentiable at    The Taylor series for about always converges to at     If the Taylor series converges for other values of these will be in an interval centred on     It is possible that a Taylor series may converge to a value other than the function value.    A Maclaurin series is just a Taylor series about     The partial sum of the Taylor series for about is called the degree Taylor polynomial for about       Find the Taylor series for about       In order to find the Taylor series for about we need to evaluate and its derivatives at So,   Thus the Taylor series for about is   It turns out that this series converges to for all values of  shows the graph of and the Taylor polynomials of degree and degree about          Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is      Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is      Example Tasks   Find the Taylor series for about     Find the Taylor polynomial of degree for about     Find the Taylor polynomial of degree for about     Find the rd degree Taylor polynomial for about      A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.        "
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
  "id": "p-66",
  "level": "2",
  "url": "Calculus_2.html#p-66",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor series centred at "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "Calculus_2.html#definition-3",
  "type": "Definition",
  "number": "2.2",
  "title": "Taylor Series.",
  "body": " Taylor Series   The series,   .  is called the Taylor series for about    "
},
{
  "id": "example-3",
  "level": "2",
  "url": "Calculus_2.html#example-3",
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
  "id": "exercise-3",
  "level": "2",
  "url": "Calculus_2.html#exercise-3",
  "type": "Checkpoint",
  "number": "2.5",
  "title": "",
  "body": " Use induction on to prove that the formula in is correct.  "
},
{
  "id": "ex-GS",
  "level": "2",
  "url": "Calculus_2.html#ex-GS",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "",
  "body": " Prove that, for every , Deduce that    You can use induction on , or just multiply out and cancel terms.   Assuming that , deduce from .   Take the limit as .   We compute since as because .  "
},
{
  "id": "p-83",
  "level": "2",
  "url": "Calculus_2.html#p-83",
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
  "number": "2.7",
  "title": "",
  "body": " Maclaurin polynomials for   Plot of the Maclaurin polynomials for . Note how they only approximate when .   "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "Calculus_2.html#theorem-3",
  "type": "Theorem",
  "number": "2.8",
  "title": "The Divergence Test.",
  "body": " The Divergence Test   If the terms of the series do not approach as then the series diverges.   "
},
{
  "id": "theorem-4",
  "level": "2",
  "url": "Calculus_2.html#theorem-4",
  "type": "Theorem",
  "number": "2.9",
  "title": "Geometric Series.",
  "body": " Geometric Series   If the infinite series is a geometric series, i.e., of the form then it converges if and only if , in which case it converges to    "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "Calculus_2.html#proof-1",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " If , then does not equal zero, so by the Divergence Test, the series diverges.  Now suppose that . By the result of , we have So since as as .  "
},
{
  "id": "example-4",
  "level": "2",
  "url": "Calculus_2.html#example-4",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": " Repeating decimals are also geometric series:   "
},
{
  "id": "theorem-5",
  "level": "2",
  "url": "Calculus_2.html#theorem-5",
  "type": "Theorem",
  "number": "2.11",
  "title": "The Ratio Test.",
  "body": " The Ratio Test   For the series , let . If  then the series converges  then the series diverges  then the test is inconclusive     "
},
{
  "id": "Ex-Ratio_test",
  "level": "2",
  "url": "Calculus_2.html#Ex-Ratio_test",
  "type": "Example",
  "number": "2.12",
  "title": "",
  "body": "  Determine the nature of the series     Convergent.    To use the ratio test consider   Thus   Since , by the ratio test this series converges. (Notice that the ratio test doesn't tell us to what number the series converges to. In this case it is .)   "
},
{
  "id": "p-107",
  "level": "2",
  "url": "Calculus_2.html#p-107",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case 1. "
},
{
  "id": "p-110",
  "level": "2",
  "url": "Calculus_2.html#p-110",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Case 2. "
},
{
  "id": "p-111",
  "level": "2",
  "url": "Calculus_2.html#p-111",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radius of convergence "
},
{
  "id": "p-112",
  "level": "2",
  "url": "Calculus_2.html#p-112",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval of convergence "
},
{
  "id": "Table_Maclaurin",
  "level": "2",
  "url": "Calculus_2.html#Table_Maclaurin",
  "type": "Table",
  "number": "2.14",
  "title": "Some Important Maclaurin Series:",
  "body": " Some Important Maclaurin Series:                                    "
},
{
  "id": "Maclaurin_series_1_on_1_plus_x2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_1_on_1_plus_x2",
  "type": "Example",
  "number": "2.15",
  "title": "",
  "body": "  Find the Maclaurin series for        We know that the Maclaurin series for on is   We can use this series by replacing with to obtain   which will converge on the interval i.e.,    "
},
{
  "id": "Maclaurin_series_x_on_2_minus_5x",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_x_on_2_minus_5x",
  "type": "Example",
  "number": "2.16",
  "title": "",
  "body": "  Find the Maclaurin series for        Once again we will use the Maclaurin series for on Now   which will converge on the interval i.e.,    "
},
{
  "id": "Maclaurin_series_e_minus_x_2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_e_minus_x_2",
  "type": "Example",
  "number": "2.17",
  "title": "",
  "body": "  Find the Maclaurin series for        Substituting into the Maclaurin series for , we obtain   which will converge for all real values of    "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "Calculus_2.html#theorem-6",
  "type": "Theorem",
  "number": "2.18",
  "title": "",
  "body": "  If with radius of convergence then    with radius of convergence ,  with radius of convergence (where ).    "
},
{
  "id": "Maclaurin_series_1_on_1_minus_x_power_2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_1_on_1_minus_x_power_2",
  "type": "Example",
  "number": "2.19",
  "title": "",
  "body": "  Find the Maclaurin series for        Notice that or put the other way, Since we know the Maclaurin series for we can differentiate this series to obtain the Maclaurin series for So, on     "
},
{
  "id": "Maclaurin_series_ln_1_plus_x",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_ln_1_plus_x",
  "type": "Example",
  "number": "2.20",
  "title": "",
  "body": "  Find the Maclaurin series for        Notice that or put the other way, . Since we know the Maclaurin series for we can integrate this series to obtain the Maclaurin series for So, on    Since is when we have Thus on     "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "Calculus_2.html#exercise-5",
  "type": "Exercise",
  "number": "2.8.1",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "Calculus_2.html#exercise-6",
  "type": "Exercise",
  "number": "2.8.2",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "Calculus_2.html#exercise-7",
  "type": "Exercise",
  "number": "2.8.3",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "Calculus_2.html#exercise-8",
  "type": "Exercise",
  "number": "2.8.4",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "Calculus_2.html#exercise-9",
  "type": "Exercise",
  "number": "2.8.5",
  "title": "",
  "body": " Use a sixth degree Maclaurin polynomial to estimate   "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "Calculus_2.html#definition-4",
  "type": "Definition",
  "number": "2.21",
  "title": "Taylor Series.",
  "body": " Taylor Series   The series,   .  is called the Taylor series for about    "
},
{
  "id": "p-159",
  "level": "2",
  "url": "Calculus_2.html#p-159",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree Taylor polynomial "
},
{
  "id": "Taylor_series_cos",
  "level": "2",
  "url": "Calculus_2.html#Taylor_series_cos",
  "type": "Example",
  "number": "2.22",
  "title": "",
  "body": " Find the Taylor series for about       In order to find the Taylor series for about we need to evaluate and its derivatives at So,   Thus the Taylor series for about is   It turns out that this series converges to for all values of  shows the graph of and the Taylor polynomials of degree and degree about        "
},
{
  "id": "Second_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Calculus_2.html#Second_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "2.24",
  "title": "",
  "body": " Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is    "
},
{
  "id": "Fourth_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Calculus_2.html#Fourth_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "2.25",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is    "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "Calculus_2.html#exercise-10",
  "type": "Exercise",
  "number": "2.9.1",
  "title": "",
  "body": " Find the Taylor series for about   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "Calculus_2.html#exercise-11",
  "type": "Exercise",
  "number": "2.9.2",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "Calculus_2.html#exercise-12",
  "type": "Exercise",
  "number": "2.9.3",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "Calculus_2.html#exercise-13",
  "type": "Exercise",
  "number": "2.9.4",
  "title": "",
  "body": " Find the rd degree Taylor polynomial for about   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "Calculus_2.html#remark-2",
  "type": "Remark",
  "number": "2.26",
  "title": "A little remark.",
  "body": " A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.     "
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
