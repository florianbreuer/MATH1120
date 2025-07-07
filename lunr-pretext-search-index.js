var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Calculus_3",
  "level": "1",
  "url": "Calculus_3.html",
  "type": "Chapter",
  "number": "1",
  "title": "CA1: Functions of Several Variables",
  "body": "    CA1: Functions of Several Variables            Functions of Two Variables  In Math1110 we studied \"(real valued) functions of one variable\", that is functions of the form, where is called the domain. We used the notation to denote such functions where denotes the independent variable and the dependent variable.  We have seen that functions of one variable are useful in practice but (of course) there are many real world relationships that are more complicated and can't be well modelled by these functions.   Suppose that we have a thin metal plate and that we are interested in the temperature on this plate. In general the temperature will vary from point to point. If we imagine a coordinate grid on the plate then points on the plate can be identified by their coordinates . Thus will depend on two independent variables, and . Thus we would write and say that is a function of two variables.    Many of the formulas you've come across in school are actually functions of several variables, such as:   The kinetic energy of an object of mass and velocity is given by the two-variable function     The value of a investment compounded continuously at an annual rate of after years is given by the two-variable function     The magnitude of the gravitational attraction between two objects of masses and , separated by a distance of , is given by the three variable function where is the universal gravitational constant .      Note that functions of two variables are of the form where is again the domain. Formally, we define a function of two variables as:   A (real valued) function of two variables is a rule that assigns to each ordered pair of real numbers in a set a unique (real) number denoted by .  Thus,  are examples of functions of two variables.  The set is called the domain of the function. Unless specified otherwise, we take to be the largest possible set of inputs for which we can calculate . The range of is the associated set of values that takes on.   Consider the function .   Find the domain of  Find:                (to 4.d.p.).  is not defined.       Since the argument of the log function has to be positive, the domain is the set of points in the plane satisfying . shows a plot of this domain in .        (to 4.d.p.).  Since is not in the domain of , is not defined.      Domain of the function   A plot of the domain of the function .     Consider the function    Find the domain of  Find:                      Since we can calculate for all values of and the domain of is                  Graphing functions of two variables  Now that we have an idea of what a function of two variables is and what its domain is, we would like a way to visualise it, similar to how we can visualise functions of a single variable by graphing them in the plane.  The two main visualisations are graphs and contour plots. We deal with contour plots in the next section. The graph of a function of two variables is the surface in defined by Thus, we imagine the \"floor\" to be the -plane of inputs to the function, and the height of the surface above (or below) this floor is the output .  A surface in is the graph of a function if and only if it passes the vertical line test, since a function only produces one output for each input in its domain.  In general it is hard to draw the graph of a function of two variables by hand and so usually we get a computer to do it. Various computer packages can produce such plots, such as Maple, Mathematica, Matlab, Wolfram Alpha and even GPT4 (which runs python code to produce the plots). The following plots are produced by SageMath - you can run the code cells to produce 3D plots which you can manipulate yourself.   Produce the graph of the function      This surface is an example of a paraboloid . It is used for satellite antennas.     Produce the graph of the function      This surface is an example of a hyperbolic paraboloid .     Produce the graph of the function       3D plot of        Produce the graph of the function       3D plot of       Not all surfaces in represent the graph of a function of two variables.   The surface associated with the equation is a sphere of radius and whose centre is the origin. Clearly this surface does not pass the vertical line test. For example, when , could be either or .  3D plot of       Example Tasks   Determine the domain of the function .    Sketch the graph of the following functions.              Level Curves and Contour Plots  As we have seen, visualising the surface corresponding to the function can be quite difficult, in particular if you're limited to a static image in two dimensions (such as printed on paper). Another way to visualise a function of two variables is to use a contour plot . Here one plots contours, also known as level curves, each of which consists of all the input points for which the output is a certain constant value. This is commonly used in topographic maps, where the contours show points on the map of a given altitude. With a bit of practise, you can visualise the shape of the landscape just from a topographic map.  Sample Topographic Map (Part of the Watagan Mountains)     The level curves of a function are curves in the -plane on which the function has the same value, i.e. on which , where is some constant.  Note:  Each point in the domain of the function lies on exactly one level curve.  When a collection of level curves for a function are drawn on the same plane it is also called a contour plot.  We can also think of level curves as the intersection of the surface and the horizontal plane .     Draw the level curves associated with for the function    The level curves of a function satisfy the equation . So for this function the level curves are: Thus the level curves are rectangular hyperbolae (except for ). The level curves for are shown in following diagram.  Rectangular hyperbolae for various values of        Draw a contour plot for the function .   The contours (i.e. level curves) of a function satisfy the equation . So for this function the level curves are: that is, circles centred on the origin and whose radius is .  Circles for various values of   Notice that there are no level curves when . This tells us that the surface does not go below the -plane.    Here is a SageMath cell that lets you compare graphs and contour plots of different functions. Note that if you fill in the regions between the contours with colours related to the output values you get a colourful plot known as a heat map .    Example Tasks   Draw the level curves associated with for the function .    Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:       Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:             Functions of 3 (or more) Variables  Although we won't do much with them in this course it is possible to define (real valued) functions in variables where is any natural number, that is functions of the form .   The function is a function of the form .    The function is a function of the form .   Visualising such functions is difficult. One option to visualise a function of three variables is to make 3D plots of its level surfaces . These are the surfaces defined by for various values of the constant . This is the same idea as plotting level curves, except now we're in one dimension higher.   The following SageMath cell displays three level surfaces of the function for     We will see later in the course that, rather than using level surfaces to gain understanding a given function, we can gain understanding of a given surface by viewing it as the level surface of a function.        Further Topics   Surfaces of Revolution  The surface associated with the graph of (see ) is an example of a special kind of surface... a surface of revolution.  A surface of revolution is a surface in obtained by rotating a curve about an axis.    Suppose we have a curve in the -plane, and we rotate this curve above the -axis. What would be an equation for the resulting surface of revolution?  Consider a point on the curve above the -axis in 3D space. Its height above the -plane is . As we rotate the curve about the -axis, the point traces out a horizontal circle on the resulting surface of revolution. The radius of this circle equals the original -coordinate of the point when it started above the -axis, and the height of the circle above the -plane equals . The height of an arbitrary point on the surface of revolution is thus , where is the radius of the circle on which the point lies. This tells us that an equation for the surface of revolution is Another way to see this is that, as a result of the rotational symmetry of the surface, the height of the surface above a point on the -plane depends only on the distance of the point from the origin.  The following SageMath code shows the partial surface of revolution obtained by rotating the curve about the -axis.    Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.   Plot of in the -plane for .          Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.         The equation of the surface of revolution will be that is,      Is the graph of a surface of revolution?   Since we can write the function as this surface can be obtained by rotating the curve in the -plane      Example Tasks   Determine the equation of the surface obtained by rotating the curve about the -axis. Make a sketch of the surface.    Is the graph of a surface of revolution?       "
},
{
  "id": "Functions-of-Two-Variables-4",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-4",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": " Suppose that we have a thin metal plate and that we are interested in the temperature on this plate. In general the temperature will vary from point to point. If we imagine a coordinate grid on the plate then points on the plate can be identified by their coordinates . Thus will depend on two independent variables, and . Thus we would write and say that is a function of two variables.  "
},
{
  "id": "Functions-of-Two-Variables-5",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-5",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": " Many of the formulas you've come across in school are actually functions of several variables, such as:   The kinetic energy of an object of mass and velocity is given by the two-variable function     The value of a investment compounded continuously at an annual rate of after years is given by the two-variable function     The magnitude of the gravitational attraction between two objects of masses and , separated by a distance of , is given by the three variable function where is the universal gravitational constant .     "
},
{
  "id": "Functions-of-Two-Variables-7",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-7",
  "type": "Definition",
  "number": "1.3",
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
  "number": "1.4",
  "title": "",
  "body": " Consider the function .   Find the domain of  Find:                (to 4.d.p.).  is not defined.       Since the argument of the log function has to be positive, the domain is the set of points in the plane satisfying . shows a plot of this domain in .        (to 4.d.p.).  Since is not in the domain of , is not defined.    "
},
{
  "id": "fig-domain1",
  "level": "2",
  "url": "Calculus_3.html#fig-domain1",
  "type": "Figure",
  "number": "1.5",
  "title": "",
  "body": " Domain of the function   A plot of the domain of the function .   "
},
{
  "id": "Functions-of-Two-Variables-12",
  "level": "2",
  "url": "Calculus_3.html#Functions-of-Two-Variables-12",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": " Consider the function    Find the domain of  Find:                      Since we can calculate for all values of and the domain of is           "
},
{
  "id": "graphs-6",
  "level": "2",
  "url": "Calculus_3.html#graphs-6",
  "type": "Example",
  "number": "1.7",
  "title": "",
  "body": " Produce the graph of the function      This surface is an example of a paraboloid . It is used for satellite antennas.   "
},
{
  "id": "graphs-7",
  "level": "2",
  "url": "Calculus_3.html#graphs-7",
  "type": "Example",
  "number": "1.8",
  "title": "",
  "body": " Produce the graph of the function      This surface is an example of a hyperbolic paraboloid .   "
},
{
  "id": "graphs-8",
  "level": "2",
  "url": "Calculus_3.html#graphs-8",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": " Produce the graph of the function       3D plot of      "
},
{
  "id": "Example-6-Calc-3",
  "level": "2",
  "url": "Calculus_3.html#Example-6-Calc-3",
  "type": "Example",
  "number": "1.11",
  "title": "",
  "body": " Produce the graph of the function       3D plot of      "
},
{
  "id": "graphs-11",
  "level": "2",
  "url": "Calculus_3.html#graphs-11",
  "type": "Example",
  "number": "1.13",
  "title": "",
  "body": " The surface associated with the equation is a sphere of radius and whose centre is the origin. Clearly this surface does not pass the vertical line test. For example, when , could be either or .  3D plot of     "
},
{
  "id": "graphs-12-2",
  "level": "2",
  "url": "Calculus_3.html#graphs-12-2",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " Determine the domain of the function .  "
},
{
  "id": "graphs-12-3",
  "level": "2",
  "url": "Calculus_3.html#graphs-12-3",
  "type": "Exercise",
  "number": "1.2.2",
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
  "number": "1.16",
  "title": "",
  "body": "The level curves of a function are curves in the -plane on which the function has the same value, i.e. on which , where is some constant. "
},
{
  "id": "level-curves-5",
  "level": "2",
  "url": "Calculus_3.html#level-curves-5",
  "type": "Example",
  "number": "1.17",
  "title": "",
  "body": " Draw the level curves associated with for the function    The level curves of a function satisfy the equation . So for this function the level curves are: Thus the level curves are rectangular hyperbolae (except for ). The level curves for are shown in following diagram.  Rectangular hyperbolae for various values of      "
},
{
  "id": "level-curves-6",
  "level": "2",
  "url": "Calculus_3.html#level-curves-6",
  "type": "Example",
  "number": "1.19",
  "title": "",
  "body": " Draw a contour plot for the function .   The contours (i.e. level curves) of a function satisfy the equation . So for this function the level curves are: that is, circles centred on the origin and whose radius is .  Circles for various values of   Notice that there are no level curves when . This tells us that the surface does not go below the -plane.   "
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
  "number": "1.3.1",
  "title": "",
  "body": " Draw the level curves associated with for the function .  "
},
{
  "id": "level-curves-8-3",
  "level": "2",
  "url": "Calculus_3.html#level-curves-8-3",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": " Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:     "
},
{
  "id": "level-curves-8-4",
  "level": "2",
  "url": "Calculus_3.html#level-curves-8-4",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": " Make a rough sketch of the contour map (centred on the origin) for the function whose graph is:     "
},
{
  "id": "functions-of-3-or-more-variables-3",
  "level": "2",
  "url": "Calculus_3.html#functions-of-3-or-more-variables-3",
  "type": "Example",
  "number": "1.23",
  "title": "",
  "body": " The function is a function of the form .  "
},
{
  "id": "functions-of-3-or-more-variables-4",
  "level": "2",
  "url": "Calculus_3.html#functions-of-3-or-more-variables-4",
  "type": "Example",
  "number": "1.24",
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
  "number": "1.25",
  "title": "",
  "body": " The following SageMath cell displays three level surfaces of the function for    "
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
  "number": "1.27",
  "title": "",
  "body": " Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.   Plot of in the -plane for .       "
},
{
  "id": "surfaces-of-revolution-8",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-8",
  "type": "Example",
  "number": "1.29",
  "title": "",
  "body": " Determine the equation of the surface obtained by rotating the curve in the -plane about the -axis.         The equation of the surface of revolution will be that is,    "
},
{
  "id": "surfaces-of-revolution-9",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-9",
  "type": "Example",
  "number": "1.31",
  "title": "",
  "body": " Is the graph of a surface of revolution?   Since we can write the function as this surface can be obtained by rotating the curve in the -plane    "
},
{
  "id": "surfaces-of-revolution-10-2",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-10-2",
  "type": "Exercise",
  "number": "1.5.1.1",
  "title": "",
  "body": " Determine the equation of the surface obtained by rotating the curve about the -axis. Make a sketch of the surface.  "
},
{
  "id": "surfaces-of-revolution-10-3",
  "level": "2",
  "url": "Calculus_3.html#surfaces-of-revolution-10-3",
  "type": "Exercise",
  "number": "1.5.1.2",
  "title": "",
  "body": " Is the graph of a surface of revolution?  "
},
{
  "id": "Calculus_4",
  "level": "1",
  "url": "Calculus_4.html",
  "type": "Chapter",
  "number": "2",
  "title": "CA2: Partial Differentiation",
  "body": "    CA2: Partial Differentiation            Partial Differentiation  Firstly, let’s recall some of the important things that we know about the derivative of the function of one variable, .   At any given point , gives the slope of the tangent to the graph of the function at that point.  Plot of (blue) and the tangent line (red) at .     At any given point , gives the instantaneous rate of change of the function at that point.  The derivative is itself a function of one variable, when it exists.   For a function of two variables, , the rate at which the function is changing at any point as we vary the independent variables depends upon the direction in which we vary those variables.    Consider the function . The graph of this function is shown below. At , . As we can see by looking at the graph, as we move away from the origin along the positive -axis the value of is increasing, i.e. the rate of change of the function will be positive. However, if we move away from the origin along the positive -axis the value of is decreasing, i.e. the rate of change of the function will be negative.   3D plot of .     As a first step to analyzing more formally how a function of two variables can change with respect to its independent variables we will first consider the cases where we vary only one variable at a time.    Consider the function at the point .  Firstly, let’s look at the instantaneous rate of change of in the direction of the positive -axis. As shown in the diagram below, if we hold constant at and vary we are actually moving along the curve .   3D plot of with a plane constant in through the point .    Along this curve and at we have . Thus, the instantaneous rate of change of in the direction of the positive -axis at the point is .  Now consider the instantaneous rate of change of in the direction of the positive -axis. As shown in the diagram below, if we hold constant at and vary we are actually moving along the curve .  Along this curve and at we have . Thus, the instantaneous rate of change of in the direction of the positive -axis at the point is .   3D plot of with a plane constant in through the point .     Consider a function of two variables, for example: . The following plots the graph of , together with the vertical planes defined by (in orange) and (in red), and arrows representing the slope of the surface inside these planes.    The slopes of the surface inside the planes above are given by what is known as the partial derivatives of the function. Where is kept constant (in the orange plane), the slope is given by the partial derivative . Where is kept constant (in the red plane), the slope is given by the partial derivative . Formally, partial derivatives are defined as follows.   Partial Derivative   Consider the function of two variables,  The partial derivative of with respect to at the point is given by the limit (if it exists) .  The partial derivative of with respect to at the point is given by the limit (if it exists) .     Notation  The notation is often used to denote . Similarly, is often used to denote .      Using the definition, calculate the partial derivatives of at the point .    and    Firstly, calculate the partial derivative of with respect to at .   Next, calculate the partial derivative of with respect to at .     If we calculate the partial derivatives of a function at the general point (as opposed to some specific point ) we will obtain (instead of two specific values) two new functions of two variables.     Using the definition, calculate the partial derivatives of .    and    Calculating the partial derivative with respect to :   Now, calculating the partial derivative with respect to :     As can be seen in the above example, to calculate the partial derivative of with respect to at the general point all we have to do is treat as a constant and differentiate with respect to (using all of the familiar rules of differentiation for functions of one variable). Similarly, to calculate the partial derivative of with respect to at the general point treat as a constant and differentiate with respect to .     Find the partial derivatives of the function at the point using the above method.    and    This function can be written as:   Now, thinking of as a constant (so that is also constant) and treating the function as a function of only,   Thus,   Next, think of as a constant (so that is also constant) and treating the function as a function of only,   Thus,     A shorter notation for the partial derivative of with respect to is . Similarly the partial derivative with respect to is written as .    Find and when .    and .    To find , think of as a constant. Thus, .  To find , think of as a constant. So, .      Find and when .    and     To find , think of as a constant. Thus, using the chain rule: .  To find , think of as a constant. Again, using the chain rule:       The equation can be thought of as implicitly defining as a function of and . Find and .    and     To find differentiate both sides of the defining equation with respect to , remembering that is some unknown function of . Also, remember to treat as a constant. Then, using the product rule and the chain rule,   Similarly, differentiating both sides of the defining equation with respect to ,     Partial derivatives can be found for functions of more than two variables.    Find the partial derivatives for the function of three variables .    , and    Write the function as .  To find treat and as constants and think of as a function of only. Thus,   To find treat and as constants and think of as a function of only. Thus,   Finally, to find treat and as constants and think of as a function of only. Thus,      Example Tasks   Find both partial derivatives of the function at the point .    Find and when .    If , find .    Find and when .    In the following contour plot the contours are for evenly spaced values of from at the point to at the point . Find the sign of and at the points , and given the following contour plot for the function . Explain your thinking.              Higher Partial Derivatives  The partial derivatives of the function are themselves functions of two variables. Thus they can be differentiated further, giving the second partial derivatives, the third partial derivatives etc. Common notations for the second partial derivatives include:     Find the second partial derivatives for the function .    , , and     Begin by finding the first partial derivatives. Here .  Now differentiate firstly with respect to to find and then with respect to to find . Thus,   Next differentiate with respect to to find and then with respect to to find . Thus,   Notice that for this function .      Calculate , and when .    , and .    Begin by writing the function in the form .  Then the first partial derivatives are and hence the second partial derivatives are .  Differentiating with respect to , with respect to and with respect to gives .    The above instances have provided examples of the following general result.   Clairaut's Theorem   If for the function both and are continuous on some domain , then on that domain .    Clairaut's Theorem can be extended to higher partial derivatives and to functions of more than two variables.    Calculate all first and second order partial derivatives for the function .    Even though is a function of variables, Clairaut's Theorem still holds. Thus there will be only 6 distinct second partial derivatives, i.e. , , , , , .  Now and so       Example Tasks   Find the second partial derivatives for the function .    Calculate  and for .    Let where is a constant and . Determine if satisfies     A little remark  Computer algebra systems can also find partial derivatives. For example, here are some examples of a queries to Wolfram Alpha that will work.             SageMath can also be used to compute partial derivatives. For example, the following Sage cell computes the partial derivatives of the function .      "
},
{
  "id": "Fig-Slope_of_tangent",
  "level": "2",
  "url": "Calculus_4.html#Fig-Slope_of_tangent",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " Plot of (blue) and the tangent line (red) at .   "
},
{
  "id": "Ex-Direction_and_rate_of_change",
  "level": "2",
  "url": "Calculus_4.html#Ex-Direction_and_rate_of_change",
  "type": "Example",
  "number": "2.2",
  "title": "",
  "body": "  Consider the function . The graph of this function is shown below. At , . As we can see by looking at the graph, as we move away from the origin along the positive -axis the value of is increasing, i.e. the rate of change of the function will be positive. However, if we move away from the origin along the positive -axis the value of is decreasing, i.e. the rate of change of the function will be negative.   3D plot of .    "
},
{
  "id": "Ex-Direction_and_instantaneous_rate_of_change",
  "level": "2",
  "url": "Calculus_4.html#Ex-Direction_and_instantaneous_rate_of_change",
  "type": "Example",
  "number": "2.4",
  "title": "",
  "body": "  Consider the function at the point .  Firstly, let’s look at the instantaneous rate of change of in the direction of the positive -axis. As shown in the diagram below, if we hold constant at and vary we are actually moving along the curve .   3D plot of with a plane constant in through the point .    Along this curve and at we have . Thus, the instantaneous rate of change of in the direction of the positive -axis at the point is .  Now consider the instantaneous rate of change of in the direction of the positive -axis. As shown in the diagram below, if we hold constant at and vary we are actually moving along the curve .  Along this curve and at we have . Thus, the instantaneous rate of change of in the direction of the positive -axis at the point is .   3D plot of with a plane constant in through the point .    "
},
{
  "id": "Sec-Partial_Differentiation-10",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivatives "
},
{
  "id": "Sec-Partial_Differentiation-11",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-11",
  "type": "Definition",
  "number": "2.7",
  "title": "Partial Derivative.",
  "body": " Partial Derivative   Consider the function of two variables,  The partial derivative of with respect to at the point is given by the limit (if it exists) .  The partial derivative of with respect to at the point is given by the limit (if it exists) .   "
},
{
  "id": "Sec-Partial_Differentiation-12",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-12",
  "type": "Remark",
  "number": "2.8",
  "title": "Notation.",
  "body": " Notation  The notation is often used to denote . Similarly, is often used to denote .  "
},
{
  "id": "Ex-Calculating_partial_derivatives_at_particular_point",
  "level": "2",
  "url": "Calculus_4.html#Ex-Calculating_partial_derivatives_at_particular_point",
  "type": "Example",
  "number": "2.9",
  "title": "",
  "body": "   Using the definition, calculate the partial derivatives of at the point .    and    Firstly, calculate the partial derivative of with respect to at .   Next, calculate the partial derivative of with respect to at .    "
},
{
  "id": "Ex-Calculating_partial_derivatives_at_general_point",
  "level": "2",
  "url": "Calculus_4.html#Ex-Calculating_partial_derivatives_at_general_point",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": "   Using the definition, calculate the partial derivatives of .    and    Calculating the partial derivative with respect to :   Now, calculating the partial derivative with respect to :    "
},
{
  "id": "Ex-Calculating_partial_derivatives_at_particular_point_shorter",
  "level": "2",
  "url": "Calculus_4.html#Ex-Calculating_partial_derivatives_at_particular_point_shorter",
  "type": "Example",
  "number": "2.11",
  "title": "",
  "body": "   Find the partial derivatives of the function at the point using the above method.    and    This function can be written as:   Now, thinking of as a constant (so that is also constant) and treating the function as a function of only,   Thus,   Next, think of as a constant (so that is also constant) and treating the function as a function of only,   Thus,    "
},
{
  "id": "Ex-shorthand_computation_example-1",
  "level": "2",
  "url": "Calculus_4.html#Ex-shorthand_computation_example-1",
  "type": "Example",
  "number": "2.12",
  "title": "",
  "body": "  Find and when .    and .    To find , think of as a constant. Thus, .  To find , think of as a constant. So, .   "
},
{
  "id": "Ex-shorthand_computation_example_arcsin",
  "level": "2",
  "url": "Calculus_4.html#Ex-shorthand_computation_example_arcsin",
  "type": "Example",
  "number": "2.13",
  "title": "",
  "body": "  Find and when .    and     To find , think of as a constant. Thus, using the chain rule: .  To find , think of as a constant. Again, using the chain rule:    "
},
{
  "id": "Ex-shorthand_computation_example-3_variables_implicit",
  "level": "2",
  "url": "Calculus_4.html#Ex-shorthand_computation_example-3_variables_implicit",
  "type": "Example",
  "number": "2.14",
  "title": "",
  "body": "  The equation can be thought of as implicitly defining as a function of and . Find and .    and     To find differentiate both sides of the defining equation with respect to , remembering that is some unknown function of . Also, remember to treat as a constant. Then, using the product rule and the chain rule,   Similarly, differentiating both sides of the defining equation with respect to ,    "
},
{
  "id": "Ex-shorthand_computation_example_3_variables",
  "level": "2",
  "url": "Calculus_4.html#Ex-shorthand_computation_example_3_variables",
  "type": "Example",
  "number": "2.15",
  "title": "",
  "body": "  Find the partial derivatives for the function of three variables .    , and    Write the function as .  To find treat and as constants and think of as a function of only. Thus,   To find treat and as constants and think of as a function of only. Thus,   Finally, to find treat and as constants and think of as a function of only. Thus,    "
},
{
  "id": "Sec-Partial_Differentiation-24-2",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-24-2",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Find both partial derivatives of the function at the point .  "
},
{
  "id": "Sec-Partial_Differentiation-24-3",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-24-3",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Find and when .  "
},
{
  "id": "Sec-Partial_Differentiation-24-4",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-24-4",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " If , find .  "
},
{
  "id": "Sec-Partial_Differentiation-24-5",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-24-5",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Find and when .  "
},
{
  "id": "Sec-Partial_Differentiation-24-6",
  "level": "2",
  "url": "Calculus_4.html#Sec-Partial_Differentiation-24-6",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": " In the following contour plot the contours are for evenly spaced values of from at the point to at the point . Find the sign of and at the points , and given the following contour plot for the function . Explain your thinking.      "
},
{
  "id": "Ex-second_partial_derivatives",
  "level": "2",
  "url": "Calculus_4.html#Ex-second_partial_derivatives",
  "type": "Example",
  "number": "2.17",
  "title": "",
  "body": "  Find the second partial derivatives for the function .    , , and     Begin by finding the first partial derivatives. Here .  Now differentiate firstly with respect to to find and then with respect to to find . Thus,   Next differentiate with respect to to find and then with respect to to find . Thus,   Notice that for this function .   "
},
{
  "id": "Ex-third_partial_derivatives",
  "level": "2",
  "url": "Calculus_4.html#Ex-third_partial_derivatives",
  "type": "Example",
  "number": "2.18",
  "title": "",
  "body": "  Calculate , and when .    , and .    Begin by writing the function in the form .  Then the first partial derivatives are and hence the second partial derivatives are .  Differentiating with respect to , with respect to and with respect to gives .   "
},
{
  "id": "Sec-Higher_Partial_Derivatives-7",
  "level": "2",
  "url": "Calculus_4.html#Sec-Higher_Partial_Derivatives-7",
  "type": "Theorem",
  "number": "2.19",
  "title": "Clairaut’s Theorem.",
  "body": " Clairaut's Theorem   If for the function both and are continuous on some domain , then on that domain .   "
},
{
  "id": "Ex-first_and_second_partials_of_3_variable_function",
  "level": "2",
  "url": "Calculus_4.html#Ex-first_and_second_partials_of_3_variable_function",
  "type": "Example",
  "number": "2.20",
  "title": "",
  "body": "  Calculate all first and second order partial derivatives for the function .    Even though is a function of variables, Clairaut's Theorem still holds. Thus there will be only 6 distinct second partial derivatives, i.e. , , , , , .  Now and so     "
},
{
  "id": "Sec-Higher_Partial_Derivatives-10-2",
  "level": "2",
  "url": "Calculus_4.html#Sec-Higher_Partial_Derivatives-10-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Find the second partial derivatives for the function .  "
},
{
  "id": "Sec-Higher_Partial_Derivatives-10-3",
  "level": "2",
  "url": "Calculus_4.html#Sec-Higher_Partial_Derivatives-10-3",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Calculate  and for .  "
},
{
  "id": "Sec-Higher_Partial_Derivatives-10-4",
  "level": "2",
  "url": "Calculus_4.html#Sec-Higher_Partial_Derivatives-10-4",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Let where is a constant and . Determine if satisfies  "
},
{
  "id": "Sec-Higher_Partial_Derivatives-11",
  "level": "2",
  "url": "Calculus_4.html#Sec-Higher_Partial_Derivatives-11",
  "type": "Remark",
  "number": "2.21",
  "title": "A little remark.",
  "body": " A little remark  Computer algebra systems can also find partial derivatives. For example, here are some examples of a queries to Wolfram Alpha that will work.           "
},
{
  "id": "Sec-Higher_Partial_Derivatives-12",
  "level": "2",
  "url": "Calculus_4.html#Sec-Higher_Partial_Derivatives-12",
  "type": "Remark",
  "number": "2.25",
  "title": "",
  "body": " SageMath can also be used to compute partial derivatives. For example, the following Sage cell computes the partial derivatives of the function .   "
},
{
  "id": "Chap-Calculus_5",
  "level": "1",
  "url": "Chap-Calculus_5.html",
  "type": "Chapter",
  "number": "3",
  "title": "CA3: Linear Approximations",
  "body": "    CA3: Linear Approximations       In Math1110 we looked at the idea of the linearization of a function of one variable . The idea was that near the point we could approximate the function using the line tangent to the function at . We called this tangent the linearization of the function at and used it to derive the linear approximation formula , . These ideas can also be applied to functions of two variables.        Tangent Planes  Recall that the graph associated with the function is a surface in (that passes the vertical line test). Wherever this surface does not have any discontinuities or cusp-like points it will have a tangent plane. Like the tangent line to the graph of a function of one variable, the tangent plane to the function at the point is the plane that just touches the surface at the point .   For the function the graph below shows the graph of the function and it's tangent plane at the point .   3D plot of and the tangent plane at .     To find the equation of the plane tangent to the function at the point , firstly recall that the equation of a plane in Cartesian form is given by or in normal form, as illustrated in , by where is a normal vector to the plane, is the position vector of a point on the plane and .   Representation of the normal vector to a plane.      Find the equation of the tangent plane to the function at .       Now, we know that the partial derivative gives the slope of the tangent at , to the curve of intersection of the surface associated with and the plane .     Since this tangent line lies in the plane tangent to at the vector will be a vector that is parallel to the tangent plane, (or lies in the tangent plane if we place it’s tail at the point ). Similarly, the vector will be another vector parallel to the tangent plane. Since these two non-parallel vectors are parallel to the tangent plane, their vector product will give a vector normal to the tangent plane, i.e. Thus, using equation , the equation of the plane tangent to at is which simplifies to .    In general, to find the equation of the plane tangent to the function at the point , note that the vectors lie in the tangent plane and hence a normal to the plane is . Since the point lies on the plane, using equation , the equation of the tangent plane is On expanding and rearranging this we get the following result.    The equation of the plane tangent to the function at the point is , where .    The Sage cell below uses the equation of the tangent plane given above to plot the tangent plane to the function at a point .     Find the equation of the plane tangent to at the point .   3D plot of and the tangent plane at .         Firstly, note that when , . Now and . Thus the equation of the tangent plane is which simplifies to .      Find the equation of the line normal to the graph of the function at the point .       Recall that the vector equation of a line in is where is the position vector of a general point, is the position vector of a point that lies on the line and is a direction vector for the line (i.e. a vector that is parallel to the line).  We know that a vector normal to the surface at the point is given by .  For the function , and . Thus a direction vector for the line normal to at the point will be . Since the normal line passes through the point its equation is .     Example Tasks   Find the equation of the tangent plane to at the point .    Find the equation of the tangent plane and normal line to at the point .    Show that every line that is normal to the sphere passes through the origin.          Linear Approximations  In we found that the equation of the tangent plane to the function at the point , which is a linear equation.     We call the function the linearisation of at the point .      Find the linearisation of at the point .       Begin by calculating the partial derivatives of , . Thus . and so the linearisation is .    When we use the linearisation of at the point to approximate the function near the point we call this the linear (or tangent plane) approximation of at the point . Notice that if we let the independent variables change by the amounts and then the linearisation will change from to . Thus we can approximate the change in the function value by On using the linearisation formula given above, we end up with the following result.   The Linear Approximation Formula   The linear approximation to the change, , in the function when the independent variables change from to is .    This result is sometimes called the small change formula for functions of two variables.    For the function , . Use a linear approximation to estimate .       Via a linear approximation . Here and so .  Thus, with and , via the linear approximation formula and hence      A steel ball has a mass, , of 6300   50   and has volume, , 800   10   . Find the density of the ball, including an estimate of the error.    7.875          The density, , is given by . Thus   Using a linear approximation to estimate the error . Now and so at , and with and (to get the maximum value of ) . Thus .      Use a linear approximation to estimate the value of at for surface defined implicitly by .       Firstly notice that when and , . Thus . Now, via a linear approximation where , and , . To find the partial derivatives we need to use implicit differentiation. Differentiating with respect to : .  Thus .  Differentiating with respect to y: .  Thus . Putting this together gives and hence      Example Tasks   Use a linear approximation to find the value of when .    Use a linear approximation to estimate the value of .    A right angled triangle with right angle at is measured with 10   0.02   and 3.4   0.02   . What is the angle at , including the error?    In the figure below a rectangle initially with sides and has been made larger so that the sides are now and .    Shade on the diagram the regions that represent:  The increase in area.  The linear approximation to the increase in area. Explain your answer.           Quadratic Approximations  We have seen previously that for functions of one variable the idea of the linearisation of the function could be extended by considering the Taylor polynomial for the function.    For the function the Maclaurin polynomial of degree is .  We saw that the linearisation of at was the Maclaurin polynomial of degree 1, i.e. .  The Maclaurin polynomial of degree 2, i.e. gives a quadratic approximation to about and so on.    For functions of one variable we derived the Taylor series by trying to find a power series in that matched the function and all its derivatives at . For functions of two variables we can use a similar idea to derive the Taylor series about the point . This series will be a power series in and that matches the function and its partial derivatives at the point . The formula for the Taylor series of two variables is quite lengthy to write and so we will not reproduce it here. However, as with functions of one variable truncations of this series are called Taylor polynomials and the Taylor polynomial of degree 1 is the linearisation of the function. Similarly, the Taylor polynomial of degree 2 will give us a quadratic approximation to the function.   Taylor Polynomial of Degree 2  The Taylor Polynomial of degree 2 for the function of two variables about the point is    The question of how good an approximation this polynomial is goes beyond what we will cover in this course but if has continuous partial derivatives and if is sufficiently close to  then the approximation should be useful.    Find the quadratic approximation to the function about the point .       First calculate the partial derivatives:   Now evaluate these at    Thus, using , we have .      Using both a linear and a quadratic approximation, estimate the difference in the volume between a box with a square base of side length 1 and height 2 and a box with square base of side length 1.1 and height 2.05 .    Via a linear approximation, .  Via a quadratic approximation,    If we let the side length of the base of a box be and the height be then volume of the box is given by the formula .  Thus the difference in the volume between the boxes will be the change in when changes by 0.1 and changes by 0.05. Using the results obtained in the example above, via a linear approximation .  Via a quadratic approximation .     Example Tasks   Find the Taylor polynomial of degree 2 for about .    Find the Taylor polynomial of degree 2 for about .    If , use a linear approximation and a quadratic approximation to find the value of the dependent variable z and an associated error bound when .      "
},
{
  "id": "Ex-Tangent_Plane",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Tangent_Plane",
  "type": "Example",
  "number": "3.1",
  "title": "",
  "body": " For the function the graph below shows the graph of the function and it's tangent plane at the point .   3D plot of and the tangent plane at .    "
},
{
  "id": "Fig-Tangent_Plane_Vector_Form_Figure",
  "level": "2",
  "url": "Chap-Calculus_5.html#Fig-Tangent_Plane_Vector_Form_Figure",
  "type": "Figure",
  "number": "3.3",
  "title": "",
  "body": " Representation of the normal vector to a plane.   "
},
{
  "id": "Ex-Equation_of_Tangent_Plane",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Equation_of_Tangent_Plane",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": "  Find the equation of the tangent plane to the function at .       Now, we know that the partial derivative gives the slope of the tangent at , to the curve of intersection of the surface associated with and the plane .     Since this tangent line lies in the plane tangent to at the vector will be a vector that is parallel to the tangent plane, (or lies in the tangent plane if we place it’s tail at the point ). Similarly, the vector will be another vector parallel to the tangent plane. Since these two non-parallel vectors are parallel to the tangent plane, their vector product will give a vector normal to the tangent plane, i.e. Thus, using equation , the equation of the plane tangent to at is which simplifies to .   "
},
{
  "id": "Thm-Equation-of-tangent-plane",
  "level": "2",
  "url": "Chap-Calculus_5.html#Thm-Equation-of-tangent-plane",
  "type": "Theorem",
  "number": "3.6",
  "title": "",
  "body": "  The equation of the plane tangent to the function at the point is , where .   "
},
{
  "id": "Ex-Equation_of_Tangent_Plane_2",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Equation_of_Tangent_Plane_2",
  "type": "Example",
  "number": "3.7",
  "title": "",
  "body": "  Find the equation of the plane tangent to at the point .   3D plot of and the tangent plane at .         Firstly, note that when , . Now and . Thus the equation of the tangent plane is which simplifies to .   "
},
{
  "id": "Ex-Equation_of_Normal_Line",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Equation_of_Normal_Line",
  "type": "Example",
  "number": "3.9",
  "title": "",
  "body": "  Find the equation of the line normal to the graph of the function at the point .       Recall that the vector equation of a line in is where is the position vector of a general point, is the position vector of a point that lies on the line and is a direction vector for the line (i.e. a vector that is parallel to the line).  We know that a vector normal to the surface at the point is given by .  For the function , and . Thus a direction vector for the line normal to at the point will be . Since the normal line passes through the point its equation is .   "
},
{
  "id": "Sec-Tangent_Planes-13-2",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Tangent_Planes-13-2",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " Find the equation of the tangent plane to at the point .  "
},
{
  "id": "Sec-Tangent_Planes-13-3",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Tangent_Planes-13-3",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " Find the equation of the tangent plane and normal line to at the point .  "
},
{
  "id": "Sec-Tangent_Planes-13-4",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Tangent_Planes-13-4",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": " Show that every line that is normal to the sphere passes through the origin.  "
},
{
  "id": "Sec-Linear_Approximations-3",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Linear_Approximations-3",
  "type": "Definition",
  "number": "3.10",
  "title": "",
  "body": "   We call the function the linearisation of at the point .   "
},
{
  "id": "Ex-Linearisation",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Linearisation",
  "type": "Example",
  "number": "3.11",
  "title": "",
  "body": "  Find the linearisation of at the point .       Begin by calculating the partial derivatives of , . Thus . and so the linearisation is .   "
},
{
  "id": "Sec-Linear_Approximations-6",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Linear_Approximations-6",
  "type": "Definition",
  "number": "3.12",
  "title": "The Linear Approximation Formula.",
  "body": " The Linear Approximation Formula   The linear approximation to the change, , in the function when the independent variables change from to is .   "
},
{
  "id": "Ex-Linear-Estimation",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Linear-Estimation",
  "type": "Example",
  "number": "3.13",
  "title": "",
  "body": "  For the function , . Use a linear approximation to estimate .       Via a linear approximation . Here and so .  Thus, with and , via the linear approximation formula and hence   "
},
{
  "id": "Ex-Find_Density_of_Steel_Ball",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Find_Density_of_Steel_Ball",
  "type": "Example",
  "number": "3.14",
  "title": "",
  "body": "  A steel ball has a mass, , of 6300   50   and has volume, , 800   10   . Find the density of the ball, including an estimate of the error.    7.875          The density, , is given by . Thus   Using a linear approximation to estimate the error . Now and so at , and with and (to get the maximum value of ) . Thus .   "
},
{
  "id": "Ex-Linear-Estimation_Implicit",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Linear-Estimation_Implicit",
  "type": "Example",
  "number": "3.15",
  "title": "",
  "body": "  Use a linear approximation to estimate the value of at for surface defined implicitly by .       Firstly notice that when and , . Thus . Now, via a linear approximation where , and , . To find the partial derivatives we need to use implicit differentiation. Differentiating with respect to : .  Thus .  Differentiating with respect to y: .  Thus . Putting this together gives and hence    "
},
{
  "id": "Sec-Linear_Approximations-11-2",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Linear_Approximations-11-2",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": " Use a linear approximation to find the value of when .  "
},
{
  "id": "Sec-Linear_Approximations-11-3",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Linear_Approximations-11-3",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " Use a linear approximation to estimate the value of .  "
},
{
  "id": "Sec-Linear_Approximations-11-4",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Linear_Approximations-11-4",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": " A right angled triangle with right angle at is measured with 10   0.02   and 3.4   0.02   . What is the angle at , including the error?  "
},
{
  "id": "Sec-Linear_Approximations-11-5",
  "level": "2",
  "url": "Chap-Calculus_5.html#Sec-Linear_Approximations-11-5",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": " In the figure below a rectangle initially with sides and has been made larger so that the sides are now and .    Shade on the diagram the regions that represent:  The increase in area.  The linear approximation to the increase in area. Explain your answer.   "
},
{
  "id": "Ex-Exp_Function_Maclaurin_polynomial_of_degree_2",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Exp_Function_Maclaurin_polynomial_of_degree_2",
  "type": "Example",
  "number": "3.17",
  "title": "",
  "body": "  For the function the Maclaurin polynomial of degree is .  We saw that the linearisation of at was the Maclaurin polynomial of degree 1, i.e. .  The Maclaurin polynomial of degree 2, i.e. gives a quadratic approximation to about and so on.   "
},
{
  "id": "Quadratic-Approximations-5",
  "level": "2",
  "url": "Chap-Calculus_5.html#Quadratic-Approximations-5",
  "type": "Definition",
  "number": "3.18",
  "title": "Taylor Polynomial of Degree 2.",
  "body": " Taylor Polynomial of Degree 2  The Taylor Polynomial of degree 2 for the function of two variables about the point is   "
},
{
  "id": "Ex-Find_quadratic_approx",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Find_quadratic_approx",
  "type": "Example",
  "number": "3.19",
  "title": "",
  "body": "  Find the quadratic approximation to the function about the point .       First calculate the partial derivatives:   Now evaluate these at    Thus, using , we have .   "
},
{
  "id": "Ex-Linear_and_quad_approx",
  "level": "2",
  "url": "Chap-Calculus_5.html#Ex-Linear_and_quad_approx",
  "type": "Example",
  "number": "3.20",
  "title": "",
  "body": "  Using both a linear and a quadratic approximation, estimate the difference in the volume between a box with a square base of side length 1 and height 2 and a box with square base of side length 1.1 and height 2.05 .    Via a linear approximation, .  Via a quadratic approximation,    If we let the side length of the base of a box be and the height be then volume of the box is given by the formula .  Thus the difference in the volume between the boxes will be the change in when changes by 0.1 and changes by 0.05. Using the results obtained in the example above, via a linear approximation .  Via a quadratic approximation .   "
},
{
  "id": "Quadratic-Approximations-9-2",
  "level": "2",
  "url": "Chap-Calculus_5.html#Quadratic-Approximations-9-2",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " Find the Taylor polynomial of degree 2 for about .  "
},
{
  "id": "Quadratic-Approximations-9-3",
  "level": "2",
  "url": "Chap-Calculus_5.html#Quadratic-Approximations-9-3",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Find the Taylor polynomial of degree 2 for about .  "
},
{
  "id": "Quadratic-Approximations-9-4",
  "level": "2",
  "url": "Chap-Calculus_5.html#Quadratic-Approximations-9-4",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": " If , use a linear approximation and a quadratic approximation to find the value of the dependent variable z and an associated error bound when .  "
},
{
  "id": "Calculus_6",
  "level": "1",
  "url": "Calculus_6.html",
  "type": "Chapter",
  "number": "4",
  "title": "CA4: The Directional Derivative",
  "body": "    CA4: The Directional Derivative       We have noted previously that the instantaneous rate of change of a function at the point will depend on the direction in which the independent variables are changing.    Consider the function . The graph of this function is shown below. At , . As we can see by looking at the graph, as we move away from the origin along the positive -axis the value of is increasing, i.e. the rate of change of the function will be positive. However, if we move away from the origin along the positive -axis the value of is decreasing, i.e. the rate of change of the function will be negative.   3D plot of .     In the case that the direction is parallel to the positive x-axis we already know that the slope is given by the partial derivative and in the case that the direction is parallel to the positive -axis the slope is given by . In this section we will look at the problem of finding the slope of the function if we move away from the point in any direction.        Directional Derivatives  Firstly, note that vectors are a convenient way to specify directions in the -plane. For example, we could say the slope of the function in the direction of the vector is while in the direction of the vector it is . Thus the problem we are looking at is that of finding the slope of the function at the point in the direction given by some vector . Mathematically, we would say that we are trying to find the directional derivative of the function at the point in the direction . The notation that we use to denote this directional derivative is .  One way to approach the problem of finding the directional derivative is to use the tangent plane to the function at the point , i.e. .  Then the slope of the function in the direction of is the slope of in that direction. If is a unit vector in the direction of then the required slope is the amount by which the value of changes as the independent variables change from to , i.e.     Consider the function . shows the graph of this function along with its the tangent plane at . Also shown on the diagram are the vectors and drawn in the -plane with their tails at the point . Then the directional derivative will be the slope of the line joining the points and while the directional derivative will be the slope of the line joining the points and .   3D plot of and the tangent plane at .      The below Sage cell computes the tangent plane to the surface at the point (shown in red). This surface is a level surface of the function . The gradient vector is then a normal vector for the surface. Since we have a point on the surface, we can then determine an equation for the tangent surface:      The below Sage cell computes the tangent plane to a \"rugby ball\" at the point and the corresponding normal vector to the surface at this point (shown in red).    To summarise:   Directional Derivative  The directional derivative of the differentiable function at the point in the direction of the unit vector is given by .       Find the directional derivative of at in the direction .    .    For the given function . Thus . Now the unit vector in the direction of is . Thus the required directional derivative is .       Find the directional derivative of in the direction of the angle (from the positive -axis) .       For the given function . Now, the unit vector in the direction of the angle is . Thus the required directional derivative is     Note that the directional derivative can be expressed in the terms of the scalar product if we use the following definition.   Gradient Vector  The vector is called the gradient vector of at .    With this definition the directional derivative can be written as:    The Sage cell below computes the gradient vector (shown by the orange arrow) at some location for the function The gradient vector points in the direction of steepest ascent on the surface . The unit vector in the direction of some angle is shown by the red arrow. (Note that when the angle is zero, the unit vector is parallel to the gradient vector.) The tangent line to the surface is plotted in green. The gradient of that tangent line is the directional derivative.       Find the gradient vector for the function . Hence find and the directional derivative in the direction of the origin.      .    For the given function , and so the gradient vector is . Thus . Now, the unit vector in the direction of the origin from the point is . Thus the required directional derivative is .     The gradient vector has some interesting facts associated with it. Note that in the following remarks, we are assuming that .   points in the direction in which the directional derivative takes on its largest value. To see this, note that At a given point is fixed and so the largest value of will occur when , i.e. when or put another way, when is parallel to . We can also see from this that the largest value that the directional derivative can take is .  Similarly, the directional derivative takes on its smallest value in the direction of and has value .     For the function , the level curve passing through the point is given by       is orthogonal (i.e. at right angles) to the level curve passing through . To see this, run the Sage cell below, which plots the level curves of the function and the corresponding gradient vectors in red.     As shown in , a vector parallel to the tangent to this curve at the point will be .   Plot of (blue) and the tangent vector (red) at the point .    Thus a vector normal to the curve at the point will be . We will see subsequently, via implicit differentiation, that for the curve , and so a vector normal to the curve at the point will be , which is parallel to .  Notice that since is orthogonal to the level curve passing through the point and that is the direction in which the directional derivative takes on its largest value, the path of steepest ascent on any surface is always at right angles to its contours. To see this, run the Sage cell below. This generates a 2D contour plot of . The unit vector starting at some point and pointing in the direction of some angle is shown by the red arrow. The gradient vector at the point is shown in orange.      For the function find the directions in which the directional derivative at the point is maximised, minimised and .    Maximised in the direction ; minimised in the direction ; and when    For the given function , and so . Thus the directional derivative, , will be maximised in the direction and minimised in the direction . Finally will be when i.e. when or some scalar multiple of this.      For the function find the level curve, the tangent line and the gradient vector at the point .    The level curve is .  The tangent line is .  The gradient vector is    Since the level curve through the point is or . We can find the equation of the tangent by standard calculus to obtain . Next, the gradient vector is . As can be seen in the diagram below, the gradient vector is orthogonal to the level curve.          Suppose you are climbing a hill whose shape is given by the equation and you are standing at the point with coordinates .  In which direction should you proceed initially in order to be ascending most rapidly?  If you climb in that direction, at what angle to the horizontal will you be climbing initially?       Head in the direction of .  The angle to the horizontal will be .      Since we want to travel on the path of steepest ascent we will want to head in the direction of . Now and hence .  In this direction we know that . Thus the angle, , to the horizontal will be .      Example Tasks   Find the directional derivative for at the point in the direction of the point .    Find the maximum value of the rate of change of at .    For the curve use the gradient vector of a two variable function to find the tangent line and the normal line at the point .    For the following contour plot for some unspecified function of two variables estimate the sign of the directional derivatives at:       The point and in the direction of .  The point and in the direction of .  The point and in the direction of the origin.  The point and in the direction of the origin.          In Three Variables  The concepts of the directional derivative and the gradient vector extend to functions of more than two variables. In this section we will look at some examples for functions of three variables.    Find the rate of change of the function at the point in the direction .    .    The gradient vector for the given function is . Thus and so the required directional derivative is .      The temperature at the point is given by the function .  Find the rate of change of temperature at the point in the direction where .  In which direction does the temperature increase the fastest at ?  Find the maximum rate of increase at .       .  .  .     The gradient vector for the given function is . Thus .   Since , the required rate of change is given by the directional derivative .  The direction in which the temperature increase the fastest at is .  The maximum rate of increase at is the maximum value of which is .       Find the equation of the tangent plane to the level surface of at the point .    .    Since , the level surface for this function satisfies the equation . A normal to this surface at the point , and hence to the tangent plane at this point, is given by . Now, , and so . Thus the equation of the tangent plane is which simplifies to .     Example Tasks   Find the directional derivative of at in the direction .    By thinking of level surfaces to a function of variables show that the normal lines to a sphere pass through its centre.      "
},
{
  "id": "Ex-Direction_and_rate_of_change_Copy",
  "level": "2",
  "url": "Calculus_6.html#Ex-Direction_and_rate_of_change_Copy",
  "type": "Example",
  "number": "4.1",
  "title": "",
  "body": "  Consider the function . The graph of this function is shown below. At , . As we can see by looking at the graph, as we move away from the origin along the positive -axis the value of is increasing, i.e. the rate of change of the function will be positive. However, if we move away from the origin along the positive -axis the value of is decreasing, i.e. the rate of change of the function will be negative.   3D plot of .    "
},
{
  "id": "Ex-Directional_Derivative",
  "level": "2",
  "url": "Calculus_6.html#Ex-Directional_Derivative",
  "type": "Example",
  "number": "4.3",
  "title": "",
  "body": "  Consider the function . shows the graph of this function along with its the tangent plane at . Also shown on the diagram are the vectors and drawn in the -plane with their tails at the point . Then the directional derivative will be the slope of the line joining the points and while the directional derivative will be the slope of the line joining the points and .   3D plot of and the tangent plane at .    "
},
{
  "id": "Directional-Derivatives-7",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-7",
  "type": "Example",
  "number": "4.5",
  "title": "",
  "body": " The below Sage cell computes the tangent plane to the surface at the point (shown in red). This surface is a level surface of the function . The gradient vector is then a normal vector for the surface. Since we have a point on the surface, we can then determine an equation for the tangent surface:    "
},
{
  "id": "Directional-Derivatives-8",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-8",
  "type": "Example",
  "number": "4.6",
  "title": "",
  "body": " The below Sage cell computes the tangent plane to a \"rugby ball\" at the point and the corresponding normal vector to the surface at this point (shown in red).   "
},
{
  "id": "Directional-Derivatives-10",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-10",
  "type": "Definition",
  "number": "4.7",
  "title": "Directional Derivative.",
  "body": " Directional Derivative  The directional derivative of the differentiable function at the point in the direction of the unit vector is given by .   "
},
{
  "id": "Ex-Find_Directional_Derivative",
  "level": "2",
  "url": "Calculus_6.html#Ex-Find_Directional_Derivative",
  "type": "Example",
  "number": "4.8",
  "title": "",
  "body": "   Find the directional derivative of at in the direction .    .    For the given function . Thus . Now the unit vector in the direction of is . Thus the required directional derivative is .   "
},
{
  "id": "Ex-Find_Directional_Derivative_2",
  "level": "2",
  "url": "Calculus_6.html#Ex-Find_Directional_Derivative_2",
  "type": "Example",
  "number": "4.9",
  "title": "",
  "body": "   Find the directional derivative of in the direction of the angle (from the positive -axis) .       For the given function . Now, the unit vector in the direction of the angle is . Thus the required directional derivative is    "
},
{
  "id": "Directional-Derivatives-14",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-14",
  "type": "Definition",
  "number": "4.10",
  "title": "Gradient Vector.",
  "body": " Gradient Vector  The vector is called the gradient vector of at .   "
},
{
  "id": "Directional-Derivatives-16",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-16",
  "type": "Example",
  "number": "4.11",
  "title": "",
  "body": " The Sage cell below computes the gradient vector (shown by the orange arrow) at some location for the function The gradient vector points in the direction of steepest ascent on the surface . The unit vector in the direction of some angle is shown by the red arrow. (Note that when the angle is zero, the unit vector is parallel to the gradient vector.) The tangent line to the surface is plotted in green. The gradient of that tangent line is the directional derivative.   "
},
{
  "id": "Ex-Find_Gradient_Vector",
  "level": "2",
  "url": "Calculus_6.html#Ex-Find_Gradient_Vector",
  "type": "Example",
  "number": "4.12",
  "title": "",
  "body": "   Find the gradient vector for the function . Hence find and the directional derivative in the direction of the origin.      .    For the given function , and so the gradient vector is . Thus . Now, the unit vector in the direction of the origin from the point is . Thus the required directional derivative is .   "
},
{
  "id": "Directional-Derivatives-19",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-19",
  "type": "Remark",
  "number": "4.13",
  "title": "",
  "body": " points in the direction in which the directional derivative takes on its largest value. To see this, note that At a given point is fixed and so the largest value of will occur when , i.e. when or put another way, when is parallel to . We can also see from this that the largest value that the directional derivative can take is .  Similarly, the directional derivative takes on its smallest value in the direction of and has value .  "
},
{
  "id": "def-level_curves",
  "level": "2",
  "url": "Calculus_6.html#def-level_curves",
  "type": "Definition",
  "number": "4.14",
  "title": "",
  "body": "  For the function , the level curve passing through the point is given by    "
},
{
  "id": "Directional-Derivatives-21",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-21",
  "type": "Remark",
  "number": "4.15",
  "title": "",
  "body": "  is orthogonal (i.e. at right angles) to the level curve passing through . To see this, run the Sage cell below, which plots the level curves of the function and the corresponding gradient vectors in red.   "
},
{
  "id": "Directional-Derivatives-22",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-22",
  "type": "Remark",
  "number": "4.16",
  "title": "",
  "body": " As shown in , a vector parallel to the tangent to this curve at the point will be .   Plot of (blue) and the tangent vector (red) at the point .    Thus a vector normal to the curve at the point will be . We will see subsequently, via implicit differentiation, that for the curve , and so a vector normal to the curve at the point will be , which is parallel to .  Notice that since is orthogonal to the level curve passing through the point and that is the direction in which the directional derivative takes on its largest value, the path of steepest ascent on any surface is always at right angles to its contours. To see this, run the Sage cell below. This generates a 2D contour plot of . The unit vector starting at some point and pointing in the direction of some angle is shown by the red arrow. The gradient vector at the point is shown in orange.   "
},
{
  "id": "Ex-Find_Max_Min_Directional_Derivative",
  "level": "2",
  "url": "Calculus_6.html#Ex-Find_Max_Min_Directional_Derivative",
  "type": "Example",
  "number": "4.18",
  "title": "",
  "body": "  For the function find the directions in which the directional derivative at the point is maximised, minimised and .    Maximised in the direction ; minimised in the direction ; and when    For the given function , and so . Thus the directional derivative, , will be maximised in the direction and minimised in the direction . Finally will be when i.e. when or some scalar multiple of this.   "
},
{
  "id": "Ex-Find_lvlcurve_tanline_gradvec",
  "level": "2",
  "url": "Calculus_6.html#Ex-Find_lvlcurve_tanline_gradvec",
  "type": "Example",
  "number": "4.19",
  "title": "",
  "body": "  For the function find the level curve, the tangent line and the gradient vector at the point .    The level curve is .  The tangent line is .  The gradient vector is    Since the level curve through the point is or . We can find the equation of the tangent by standard calculus to obtain . Next, the gradient vector is . As can be seen in the diagram below, the gradient vector is orthogonal to the level curve.       "
},
{
  "id": "Ex-Hill_Climbing",
  "level": "2",
  "url": "Calculus_6.html#Ex-Hill_Climbing",
  "type": "Example",
  "number": "4.21",
  "title": "",
  "body": "  Suppose you are climbing a hill whose shape is given by the equation and you are standing at the point with coordinates .  In which direction should you proceed initially in order to be ascending most rapidly?  If you climb in that direction, at what angle to the horizontal will you be climbing initially?       Head in the direction of .  The angle to the horizontal will be .      Since we want to travel on the path of steepest ascent we will want to head in the direction of . Now and hence .  In this direction we know that . Thus the angle, , to the horizontal will be .    "
},
{
  "id": "Directional-Derivatives-26-2",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-26-2",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": " Find the directional derivative for at the point in the direction of the point .  "
},
{
  "id": "Directional-Derivatives-26-3",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-26-3",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": " Find the maximum value of the rate of change of at .  "
},
{
  "id": "Directional-Derivatives-26-4",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-26-4",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": " For the curve use the gradient vector of a two variable function to find the tangent line and the normal line at the point .  "
},
{
  "id": "Directional-Derivatives-26-5",
  "level": "2",
  "url": "Calculus_6.html#Directional-Derivatives-26-5",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": " For the following contour plot for some unspecified function of two variables estimate the sign of the directional derivatives at:       The point and in the direction of .  The point and in the direction of .  The point and in the direction of the origin.  The point and in the direction of the origin.   "
},
{
  "id": "Ex-rate_of_change",
  "level": "2",
  "url": "Calculus_6.html#Ex-rate_of_change",
  "type": "Example",
  "number": "4.23",
  "title": "",
  "body": "  Find the rate of change of the function at the point in the direction .    .    The gradient vector for the given function is . Thus and so the required directional derivative is .   "
},
{
  "id": "Ex-Temperature",
  "level": "2",
  "url": "Calculus_6.html#Ex-Temperature",
  "type": "Example",
  "number": "4.24",
  "title": "",
  "body": "  The temperature at the point is given by the function .  Find the rate of change of temperature at the point in the direction where .  In which direction does the temperature increase the fastest at ?  Find the maximum rate of increase at .       .  .  .     The gradient vector for the given function is . Thus .   Since , the required rate of change is given by the directional derivative .  The direction in which the temperature increase the fastest at is .  The maximum rate of increase at is the maximum value of which is .    "
},
{
  "id": "Ex-Level_surface_equation",
  "level": "2",
  "url": "Calculus_6.html#Ex-Level_surface_equation",
  "type": "Example",
  "number": "4.25",
  "title": "",
  "body": "  Find the equation of the tangent plane to the level surface of at the point .    .    Since , the level surface for this function satisfies the equation . A normal to this surface at the point , and hence to the tangent plane at this point, is given by . Now, , and so . Thus the equation of the tangent plane is which simplifies to .   "
},
{
  "id": "In_Three_Variables-6-2",
  "level": "2",
  "url": "Calculus_6.html#In_Three_Variables-6-2",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": " Find the directional derivative of at in the direction .  "
},
{
  "id": "In_Three_Variables-6-3",
  "level": "2",
  "url": "Calculus_6.html#In_Three_Variables-6-3",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": " By thinking of level surfaces to a function of variables show that the normal lines to a sphere pass through its centre.  "
},
{
  "id": "Calculus_7",
  "level": "1",
  "url": "Calculus_7.html",
  "type": "Chapter",
  "number": "5",
  "title": "CA5: Local and Global Extrema",
  "body": "    CA5: Local and Global Extrema            Critical Points  Recall that a function of one variable, has a critical point at if the tangent line to the curve at is horizontal or if the derivative does not exist at that point. This critical point can be either a (local) maximum, minimum or horizontal point of inflection or vertical point of inflection. (The first three possibilities are shown in below.)   A plot of with stationary points labelled.    The idea of critical points can be applied to functions of two variables.   Critical Point   The function has a critical point at if the tangent plane to the surface at the point is horizontal or if one of the directional derivatives does not exist.    As with functions of one variable, critical points of functions of two variables will be one of three types.   If at a critical point for all points in some open disk centred on then the critical point is a local maximum .  If at a critical point for all points in some open disk centred on then the critical point is a local minimum .  For a smooth function (i.e. a function for which all derivatives exist) if a critical point is not a local maximum or a local minimum then it is a saddle point .     The graph of the function is given below with local maxima and local minima labelled.   3D plot of with local minima and maxima labelled.        The graph of the function is given below with a saddle point labelled.   3D plot of with a saddle point labelled.      For smooth functions we can find the critical points by looking for those points where the tangent plane is horizontal. If the function has a tangent plane at the point we can determine algebraically that it is horizontal by checking that:   The normal vector for the plane is parallel to the vector , or  The directional derivative at is zero in every direction, or  The gradient vector at is .   These conditions are all equivalent and they lead us to the following theorem.   Critical Point   The point is a critical point of the function if , or, if at least one of these derivatives does not exist.    Note: For the most part, we will assume that the function is smooth, i.e. has derivatives of all orders. In particular a smooth function does not have any discontinuities or cusps. Such critical points will occur for functions of two variables when at least one of the partial derivatives does not exist at the critical point.    Locate, and determine the nature of, the critical points of the function .    is a local minimum; is a local maximum; and are saddle points.    To locate the critical points we solve the equations , and check for any points where they do not exist. Since this function is given by a polynomial, the partial derivatives exist. We set them to zero below. From  . Putting into gives . Putting into gives . Thus there are 4 critical points at .  If we have the graph of the function then we can usually determine the nature of these critical points by inspection. From the (computer generated) graph shown below we can see with very careful inspection that the critical point at is a local minimum, the critical point at is a local maximum and the critical points at and are saddle points.   3D plot of .    Sometimes the nature of the critical points is not clear on such graphs or we don't have access to the graph. Another approach to determining the nature of the critical points is to sketch the level curves for the function.   Sketch of the level curves for various .    From this diagram we can see that as we move away from the critical points at in any direction the function value is increasing and hence is local minimum. Similarly as we move away from the critical point at in any direction the function value is decreasing is hence is a local maximum. For the critical points at and we can move away in some directions and have the function value increase while in other directions the function value will decrease. Hence these critical points are saddle points.  The below Sage cell plots the critical points (in red) of the function on the 3D surface plot and on the 2D contour plot.       Example Tasks   Find the critical points of the function and use the plot of level curves given below to determine the nature of each critical point.              Second Derivative Test  An algebraic method for determining what type of critical points a function has is given by the following theorem.   The Second Derivative Test   Let the function have continuous 2nd partial derivatives and let be a critical point of the function. Let .   If and then has a local minimum at .  If and then has a local maximum at .  If then has a saddle point at .  If then the 2nd derivative test is inconclusive.      Outline of Proof  For the sake of simplicity assume that the critical point is at the point . Now using a Taylor expansion for functions of two variables about we have (up to the quadratic terms) . Since is a critical point of the function . Thus .  On completing the square (and dropping the evaluation at for brevity) .  From this we can see that if and then when and are varied from , increases and so will be a local minimum.     Locate and identify the critical points of the function .    is a local minimum; is a local maximum; and are saddle points.    We located the critical points of this function in an earlier example. We found that there are 4 critical points at .  To determine the nature of these critical points, in this example we will use the second derivative test. To this end, note that . Thus . Now, applying the second derivative test:   At , , and so is a local minimum.  At , , and so is a local maximum.  At , and so is a saddle point.  At , and so is also a saddle point.   This is in agreement with the conclusions we made on the nature of these critical pointson the basis of the level curves of the function.      Locate and identify the critical points of the function .    is a local maximum.    Here .  For this function both partial derivatives are undefined at and so this point will be a critical point. However we cannot use the second derivative test to determine the nature of this critical point. In this case we can see from the graph of the function that the critical point at is a local maximum.         Example Tasks   Locate and identify the critical points of the function .    Locate and identify the critical points of the function .              Global Extrema   Global Extrema   Consider the function of two variables on the domain D.   If there exists some point in such that for all points in then the function has a global maximum at .  Similarly, if there exists some point in such that for all points in then the function has a global minimum at .       The graph of the function over the domain is shown below.   3D plot of with global maximum and minimum labelled.      Before discussing global extrema for functions of two variables, recall the situation for a function of one variable . If is continuous on the closed interval then is guaranteed to have both a global maximum and a global minimum on .   Plot of with global maximum and minimum, and critical points labelled.    These global extrema can be found by evaluating at   All of the critical points of in , and  The endpoints of .   The procedure for finding the global extrema of functions of two variables is very similar and is based on the following theorem.   Extreme Value Theorem   If is a continuous function on the closed and bounded domain then has both a global maximum and a global minimum on .    Note that a closed region, , is a region in the plane that contains its boundary. For example in the diagram below Region would be a closed region whereas Region is not closed.   Example of a region which is closed, and a region which is not closed.    A bounded region, , is a region in the plane that doesn't extend to infinity in any direction. For example in the diagram below Region would be a bounded region whereas Region is not bounded.   Example of a region which is bounded, and a region which is not bounded.     Locating Global Extrema   To locate the global extrema of the continuous function on the closed and bounded domain :   Find all of the critical points in the interior of ;  Find the maximum and minimum values of on the boundary of ;  Evaluate at each of the above points and compare.      The below Sage cell plots the global maximum and global minimum (shown in red) of the surface on the disc (shown in green).      Find the global extrema of the function on the closed triangular region with vertices , and .    Global maximum: at  Global minimum: at .        Firstly note that is a closed and bounded region in the plane and so we can use the method outlined above. So begin by finding the critical points of . Here .  Critical points occur when and so this function has only one critical point at . This is inside and so we evaluate the function at this point, i.e. .  To find the maximum and minimum values of the function on the boundary we will have to consider the 3 sides of the triangle separately. Firstly, consider the side of the triangle defined by .  On this interval we think of as a function of only, i.e. .      This has a maximum value at and minimum value at .  Next consider the side of the triangle defined by . On this interval we think of as a function of only, i.e. .      Again, using the technique given above for locating the global extrema for a function of one variable (or by looking at the graph) we find that the largest value of occurs at (giving ) and the smallest value of occurs at , (giving ).  Finally on the interval defined by , we can think of as a function of only, i.e. .      For this function the global maximum is at and the global minimum is at .  On comparing the value of the function at each of the global extrema on the sides of the triangle and at the critical point inside the region we conclude that the function has a global maximum of at and a global minimum of at .     Example Tasks   Find the global extrema of on .    Find the global extrema of on .     "
},
{
  "id": "Fig_max_min_inflection",
  "level": "2",
  "url": "Calculus_7.html#Fig_max_min_inflection",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": " A plot of with stationary points labelled.   "
},
{
  "id": "Critical-Points-5",
  "level": "2",
  "url": "Calculus_7.html#Critical-Points-5",
  "type": "Definition",
  "number": "5.2",
  "title": "Critical Point.",
  "body": " Critical Point   The function has a critical point at if the tangent plane to the surface at the point is horizontal or if one of the directional derivatives does not exist.   "
},
{
  "id": "Ex-Local_max_and_min",
  "level": "2",
  "url": "Calculus_7.html#Ex-Local_max_and_min",
  "type": "Example",
  "number": "5.3",
  "title": "",
  "body": "  The graph of the function is given below with local maxima and local minima labelled.   3D plot of with local minima and maxima labelled.     "
},
{
  "id": "Ex-Saddle_point",
  "level": "2",
  "url": "Calculus_7.html#Ex-Saddle_point",
  "type": "Example",
  "number": "5.5",
  "title": "",
  "body": "  The graph of the function is given below with a saddle point labelled.   3D plot of with a saddle point labelled.     "
},
{
  "id": "Critical-Points-13",
  "level": "2",
  "url": "Calculus_7.html#Critical-Points-13",
  "type": "Theorem",
  "number": "5.7",
  "title": "Critical Point.",
  "body": " Critical Point   The point is a critical point of the function if , or, if at least one of these derivatives does not exist.   "
},
{
  "id": "Ex-Locate_critical_points",
  "level": "2",
  "url": "Calculus_7.html#Ex-Locate_critical_points",
  "type": "Example",
  "number": "5.8",
  "title": "",
  "body": "  Locate, and determine the nature of, the critical points of the function .    is a local minimum; is a local maximum; and are saddle points.    To locate the critical points we solve the equations , and check for any points where they do not exist. Since this function is given by a polynomial, the partial derivatives exist. We set them to zero below. From  . Putting into gives . Putting into gives . Thus there are 4 critical points at .  If we have the graph of the function then we can usually determine the nature of these critical points by inspection. From the (computer generated) graph shown below we can see with very careful inspection that the critical point at is a local minimum, the critical point at is a local maximum and the critical points at and are saddle points.   3D plot of .    Sometimes the nature of the critical points is not clear on such graphs or we don't have access to the graph. Another approach to determining the nature of the critical points is to sketch the level curves for the function.   Sketch of the level curves for various .    From this diagram we can see that as we move away from the critical points at in any direction the function value is increasing and hence is local minimum. Similarly as we move away from the critical point at in any direction the function value is decreasing is hence is a local maximum. For the critical points at and we can move away in some directions and have the function value increase while in other directions the function value will decrease. Hence these critical points are saddle points.  The below Sage cell plots the critical points (in red) of the function on the 3D surface plot and on the 2D contour plot.    "
},
{
  "id": "Critical-Points-16-2",
  "level": "2",
  "url": "Calculus_7.html#Critical-Points-16-2",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": " Find the critical points of the function and use the plot of level curves given below to determine the nature of each critical point.      "
},
{
  "id": "Second-Derivative-Test-3",
  "level": "2",
  "url": "Calculus_7.html#Second-Derivative-Test-3",
  "type": "Theorem",
  "number": "5.12",
  "title": "The Second Derivative Test.",
  "body": " The Second Derivative Test   Let the function have continuous 2nd partial derivatives and let be a critical point of the function. Let .   If and then has a local minimum at .  If and then has a local maximum at .  If then has a saddle point at .  If then the 2nd derivative test is inconclusive.    "
},
{
  "id": "Second-Derivative-Test-4",
  "level": "2",
  "url": "Calculus_7.html#Second-Derivative-Test-4",
  "type": "Proof",
  "number": "5.2.1",
  "title": "Outline of Proof.",
  "body": " Outline of Proof  For the sake of simplicity assume that the critical point is at the point . Now using a Taylor expansion for functions of two variables about we have (up to the quadratic terms) . Since is a critical point of the function . Thus .  On completing the square (and dropping the evaluation at for brevity) .  From this we can see that if and then when and are varied from , increases and so will be a local minimum.  "
},
{
  "id": "Ex-Locate_critical_points_2",
  "level": "2",
  "url": "Calculus_7.html#Ex-Locate_critical_points_2",
  "type": "Example",
  "number": "5.13",
  "title": "",
  "body": "  Locate and identify the critical points of the function .    is a local minimum; is a local maximum; and are saddle points.    We located the critical points of this function in an earlier example. We found that there are 4 critical points at .  To determine the nature of these critical points, in this example we will use the second derivative test. To this end, note that . Thus . Now, applying the second derivative test:   At , , and so is a local minimum.  At , , and so is a local maximum.  At , and so is a saddle point.  At , and so is also a saddle point.   This is in agreement with the conclusions we made on the nature of these critical pointson the basis of the level curves of the function.   "
},
{
  "id": "Ex-Locate_critical_points_3",
  "level": "2",
  "url": "Calculus_7.html#Ex-Locate_critical_points_3",
  "type": "Example",
  "number": "5.14",
  "title": "",
  "body": "  Locate and identify the critical points of the function .    is a local maximum.    Here .  For this function both partial derivatives are undefined at and so this point will be a critical point. However we cannot use the second derivative test to determine the nature of this critical point. In this case we can see from the graph of the function that the critical point at is a local maximum.       "
},
{
  "id": "Second-Derivative-Test-7-2",
  "level": "2",
  "url": "Calculus_7.html#Second-Derivative-Test-7-2",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": " Locate and identify the critical points of the function .  "
},
{
  "id": "Second-Derivative-Test-7-3",
  "level": "2",
  "url": "Calculus_7.html#Second-Derivative-Test-7-3",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": " Locate and identify the critical points of the function .      "
},
{
  "id": "Global-Extrema-2",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-2",
  "type": "Definition",
  "number": "5.17",
  "title": "Global Extrema.",
  "body": " Global Extrema   Consider the function of two variables on the domain D.   If there exists some point in such that for all points in then the function has a global maximum at .  Similarly, if there exists some point in such that for all points in then the function has a global minimum at .    "
},
{
  "id": "Global-Extrema-3",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-3",
  "type": "Example",
  "number": "5.18",
  "title": "",
  "body": "  The graph of the function over the domain is shown below.   3D plot of with global maximum and minimum labelled.     "
},
{
  "id": "Fig8_Global_Extrema_1D",
  "level": "2",
  "url": "Calculus_7.html#Fig8_Global_Extrema_1D",
  "type": "Figure",
  "number": "5.20",
  "title": "",
  "body": " Plot of with global maximum and minimum, and critical points labelled.   "
},
{
  "id": "Global-Extrema-9",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-9",
  "type": "Theorem",
  "number": "5.21",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   If is a continuous function on the closed and bounded domain then has both a global maximum and a global minimum on .   "
},
{
  "id": "Fig9_closed_region",
  "level": "2",
  "url": "Calculus_7.html#Fig9_closed_region",
  "type": "Figure",
  "number": "5.22",
  "title": "",
  "body": " Example of a region which is closed, and a region which is not closed.   "
},
{
  "id": "Fig10_bounded_region",
  "level": "2",
  "url": "Calculus_7.html#Fig10_bounded_region",
  "type": "Figure",
  "number": "5.23",
  "title": "",
  "body": " Example of a region which is bounded, and a region which is not bounded.   "
},
{
  "id": "Global-Extrema-14",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-14",
  "type": "Remark",
  "number": "5.24",
  "title": "Locating Global Extrema.",
  "body": " Locating Global Extrema   To locate the global extrema of the continuous function on the closed and bounded domain :   Find all of the critical points in the interior of ;  Find the maximum and minimum values of on the boundary of ;  Evaluate at each of the above points and compare.    "
},
{
  "id": "Global-Extrema-15",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-15",
  "type": "Example",
  "number": "5.25",
  "title": "",
  "body": " The below Sage cell plots the global maximum and global minimum (shown in red) of the surface on the disc (shown in green).   "
},
{
  "id": "Global-Extrema-16",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-16",
  "type": "Example",
  "number": "5.26",
  "title": "",
  "body": "  Find the global extrema of the function on the closed triangular region with vertices , and .    Global maximum: at  Global minimum: at .        Firstly note that is a closed and bounded region in the plane and so we can use the method outlined above. So begin by finding the critical points of . Here .  Critical points occur when and so this function has only one critical point at . This is inside and so we evaluate the function at this point, i.e. .  To find the maximum and minimum values of the function on the boundary we will have to consider the 3 sides of the triangle separately. Firstly, consider the side of the triangle defined by .  On this interval we think of as a function of only, i.e. .      This has a maximum value at and minimum value at .  Next consider the side of the triangle defined by . On this interval we think of as a function of only, i.e. .      Again, using the technique given above for locating the global extrema for a function of one variable (or by looking at the graph) we find that the largest value of occurs at (giving ) and the smallest value of occurs at , (giving ).  Finally on the interval defined by , we can think of as a function of only, i.e. .      For this function the global maximum is at and the global minimum is at .  On comparing the value of the function at each of the global extrema on the sides of the triangle and at the critical point inside the region we conclude that the function has a global maximum of at and a global minimum of at .   "
},
{
  "id": "Global-Extrema-17-2",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-17-2",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Find the global extrema of on .  "
},
{
  "id": "Global-Extrema-17-3",
  "level": "2",
  "url": "Calculus_7.html#Global-Extrema-17-3",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " Find the global extrema of on .  "
},
{
  "id": "Chap-Calculus_8",
  "level": "1",
  "url": "Chap-Calculus_8.html",
  "type": "Chapter",
  "number": "6",
  "title": "CA6: Chain Rules",
  "body": "    CA6: Chain Rules            The Single Variable Chain Rule  Recall that the chain rule for functions of one variable says:   Use the chain rule to find if and .    Via the chain rule:     With multivariable functions there are many ways in which to form composite functions but there will be a chain rule for each possibility. In the following sections we will look at some of these.       Multivariable Chain Rules  Begin by considering the case where and , . In this case we can think of as defining a real valued function .   If and , then find by substituting the expressions for and into and then differentiating.    On substituting and into  Thus     Now for a function of two variables the linear approximation (or ''small change'') formula says: Thus   This formula becomes more accurate as and from the limit we obtain the following chain rule.   Chain Rule 1   If and , are differentiable functions then      If and , then find by using the chain rule.    Here So, via the chain rule      Use the chain rule to find when and .    Here So, via the chain rule      The radius of a right circular cone is increasing at a rate of cm\/s while its height is decreasing at a rate of cm\/s. At what rate is the volume of the cone changing when the radius is cm and the height is cm?    The volume of right circular cone of radius and height is  Since both radius and the height are functions of time , i.e. and , we can think of the volume as a function of time as well, i.e. , and the problem is asking us to find when and . Now, by the chain rule:  Here and we are given that and . (Note that is negative because the height is decreasing.) Thus, at and      Consider the case now where and . In this case we can think of as defining a function of two variables and hence has partial derivatives with respect to these variables. The relevant chain rules for this case are:   Chain Rule 2   If and are differentiable functions then      A spherical balloon holds a fixed amount of gas but its volume is dependent on the pressure and temperature of the gas according to Determine expressions for the rate of change of the radius of the balloon with respect to the pressure and temperature of the gas.       The volume of a sphere of radius is  Thus we can think of the radius of the balloon as a function of its volume, i.e. where the volume is, in turn, a function of the pressure and temperature of the gas, i.e.  Using Chain Rule 2:   Similarly      Use the appropriate chain rules to calculate and when      Using Chain Rule 2:  Now, (via the quotient rule) and  Thus    Next consider the case where and , . In this case we can think of as defining a function of two variables . The relevant chain rules for this case are:   Chain Rule 3   If and , are differentiable functions then       Use the appropriate chain rules to find and when      Here and   Thus, by Chain Rule 3 and     The chain rules given above are just special cases of the general chain rule.   The General Chain Rule   If is a differentiable function of variables and each is a differentiable function of the variables then for each      Find if and      By the general Chain Rule      Example Tasks  Use the appropriate chain rules to find and when   Two straight roads intersect at right angles. Car A is moving on one road approaches the intersection at km\/h while Car B moving on the other road approaches the intersection at km\/h. At what rate is the distance between the cars changing when A is km from the intersection and B is km from the intersection?  Show that any function of the form is a solution of the wave equation     If and and find an appropriate chain rule for .  Using the result of part (a) find when and and .          Implicit Differentiation  We can use our chain rules to produce another way looking at implicit differentiation. Assuming that the equation implicitly defines the function , recall that implicit differentiation gives us a way of finding a formula for .   Use implicit differentiation to find a formula for for the function implicitly defined by the equation .      Differentiating both sides of the equation with respect to      For the example above, we can construct the surface and plot this using the Sage cell below. The constant that determines the level curves can be varied with the slider. The level curves are shown in blue, and the slopes given by are shown as little grey line segments. The slope of each segment is given by evaluating at its position. (Note that these slopes are tangential to the curve, as they must be.) Furthermore:  by selecting the \"show3d\" option, you can also see the 3D plot of and a \"water level\" of . In this case, the curves represent the \"shoreline\";  by selecting the \"gradient\" option, you can show the gradient vectors (red arrows), which are of course perpendicular to the level curves (and thus the grey slopes).     To use the chain rules to find a formula for for the function implicitly defined by the equation let Thus we can think of as being a function of the one variable , and so, by Chain Rule 1, Now we are thinking of equation as defining a function of one variable , so let and and hence   Returning to equation , on differentiating both sides with respect to , we obtain from which we obtain, provided ,   Thus we can find a formula for via partial differentiation as opposed to implicit differentiation. In summary:    If the equation implicitly defines the function then      Use partial differentiation to find a formula for for the function implicitly defined by the equation .      Let . Then Thus     A similar argument can extend this result to functions of more than one variable. For example:    If implicitly defines the function then      Use partial differentiation to find formulas for for the function implicitly defined by the equation       Let . Then Thus       Example Tasks  Using partial differentiation (as opposed to implicit differentiation) find at when the function is defined by the equation     "
},
{
  "id": "Ex-Single_variable_chain_rule",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Single_variable_chain_rule",
  "type": "Example",
  "number": "6.1",
  "title": "",
  "body": " Use the chain rule to find if and .    Via the chain rule:    "
},
{
  "id": "Ex-Multivariate_chain_rule_substitution",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Multivariate_chain_rule_substitution",
  "type": "Example",
  "number": "6.2",
  "title": "",
  "body": " If and , then find by substituting the expressions for and into and then differentiating.    On substituting and into  Thus    "
},
{
  "id": "Sec-Multivariable-chain-rules-6",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-6",
  "type": "Theorem",
  "number": "6.3",
  "title": "Chain Rule 1.",
  "body": " Chain Rule 1   If and , are differentiable functions then    "
},
{
  "id": "Ex-Chain_rule_1_sample_1",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Chain_rule_1_sample_1",
  "type": "Example",
  "number": "6.4",
  "title": "",
  "body": " If and , then find by using the chain rule.    Here So, via the chain rule    "
},
{
  "id": "Ex-Chain_rule_1_sample_2",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Chain_rule_1_sample_2",
  "type": "Example",
  "number": "6.5",
  "title": "",
  "body": " Use the chain rule to find when and .    Here So, via the chain rule    "
},
{
  "id": "Ex-Related_rate_chain_rule_1",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Related_rate_chain_rule_1",
  "type": "Example",
  "number": "6.6",
  "title": "",
  "body": " The radius of a right circular cone is increasing at a rate of cm\/s while its height is decreasing at a rate of cm\/s. At what rate is the volume of the cone changing when the radius is cm and the height is cm?    The volume of right circular cone of radius and height is  Since both radius and the height are functions of time , i.e. and , we can think of the volume as a function of time as well, i.e. , and the problem is asking us to find when and . Now, by the chain rule:  Here and we are given that and . (Note that is negative because the height is decreasing.) Thus, at and     "
},
{
  "id": "Sec-Multivariable-chain-rules-11",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-11",
  "type": "Theorem",
  "number": "6.7",
  "title": "Chain Rule 2.",
  "body": " Chain Rule 2   If and are differentiable functions then    "
},
{
  "id": "Ex-Related_rate_chain_rule_2",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Related_rate_chain_rule_2",
  "type": "Example",
  "number": "6.8",
  "title": "",
  "body": " A spherical balloon holds a fixed amount of gas but its volume is dependent on the pressure and temperature of the gas according to Determine expressions for the rate of change of the radius of the balloon with respect to the pressure and temperature of the gas.       The volume of a sphere of radius is  Thus we can think of the radius of the balloon as a function of its volume, i.e. where the volume is, in turn, a function of the pressure and temperature of the gas, i.e.  Using Chain Rule 2:   Similarly    "
},
{
  "id": "Ex-Chain_rule_2_sample",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Chain_rule_2_sample",
  "type": "Example",
  "number": "6.9",
  "title": "",
  "body": " Use the appropriate chain rules to calculate and when      Using Chain Rule 2:  Now, (via the quotient rule) and  Thus   "
},
{
  "id": "Sec-Multivariable-chain-rules-15",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-15",
  "type": "Theorem",
  "number": "6.10",
  "title": "Chain Rule 3.",
  "body": " Chain Rule 3   If and , are differentiable functions then     "
},
{
  "id": "Ex-Chain_rule_3_sample",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Chain_rule_3_sample",
  "type": "Example",
  "number": "6.11",
  "title": "",
  "body": " Use the appropriate chain rules to find and when      Here and   Thus, by Chain Rule 3 and    "
},
{
  "id": "Sec-Multivariable-chain-rules-18",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-18",
  "type": "Theorem",
  "number": "6.12",
  "title": "The General Chain Rule.",
  "body": " The General Chain Rule   If is a differentiable function of variables and each is a differentiable function of the variables then for each    "
},
{
  "id": "Ex-General_chain_rule_sample",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-General_chain_rule_sample",
  "type": "Example",
  "number": "6.13",
  "title": "",
  "body": " Find if and      By the general Chain Rule    "
},
{
  "id": "Sec-Multivariable-chain-rules-20-2",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-20-2",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "",
  "body": "Use the appropriate chain rules to find and when  "
},
{
  "id": "Sec-Multivariable-chain-rules-20-3",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-20-3",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "",
  "body": "Two straight roads intersect at right angles. Car A is moving on one road approaches the intersection at km\/h while Car B moving on the other road approaches the intersection at km\/h. At what rate is the distance between the cars changing when A is km from the intersection and B is km from the intersection? "
},
{
  "id": "Sec-Multivariable-chain-rules-20-4",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-20-4",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "",
  "body": "Show that any function of the form is a solution of the wave equation  "
},
{
  "id": "Sec-Multivariable-chain-rules-20-5",
  "level": "2",
  "url": "Chap-Calculus_8.html#Sec-Multivariable-chain-rules-20-5",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "",
  "body": "  If and and find an appropriate chain rule for .  Using the result of part (a) find when and and .   "
},
{
  "id": "Ex-Implicit_differentiation_recall",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Implicit_differentiation_recall",
  "type": "Example",
  "number": "6.14",
  "title": "",
  "body": " Use implicit differentiation to find a formula for for the function implicitly defined by the equation .      Differentiating both sides of the equation with respect to     "
},
{
  "id": "Chap-Calculus_8-4-8",
  "level": "2",
  "url": "Chap-Calculus_8.html#Chap-Calculus_8-4-8",
  "type": "Theorem",
  "number": "6.15",
  "title": "",
  "body": "  If the equation implicitly defines the function then    "
},
{
  "id": "Ex-Implicit_differentiation_via_partial_differentiation",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Implicit_differentiation_via_partial_differentiation",
  "type": "Example",
  "number": "6.16",
  "title": "",
  "body": " Use partial differentiation to find a formula for for the function implicitly defined by the equation .      Let . Then Thus    "
},
{
  "id": "Chap-Calculus_8-4-11",
  "level": "2",
  "url": "Chap-Calculus_8.html#Chap-Calculus_8-4-11",
  "type": "Theorem",
  "number": "6.17",
  "title": "",
  "body": "  If implicitly defines the function then    "
},
{
  "id": "Ex-Implicit_differentiation_via_partial_differentiation_general",
  "level": "2",
  "url": "Chap-Calculus_8.html#Ex-Implicit_differentiation_via_partial_differentiation_general",
  "type": "Example",
  "number": "6.18",
  "title": "",
  "body": " Use partial differentiation to find formulas for for the function implicitly defined by the equation       Let . Then Thus     "
},
{
  "id": "Chap-Calculus_8-4-13-2",
  "level": "2",
  "url": "Chap-Calculus_8.html#Chap-Calculus_8-4-13-2",
  "type": "Exercise",
  "number": "6.3.1",
  "title": "",
  "body": "Using partial differentiation (as opposed to implicit differentiation) find at when the function is defined by the equation  "
},
{
  "id": "Chap-Calculus_1",
  "level": "1",
  "url": "Chap-Calculus_1.html",
  "type": "Chapter",
  "number": "7",
  "title": "CA7: Maclaurin Series",
  "body": "    CA7: Maclaurin Series            Introduction   Faster multiplication  There are actually multiplication algorithms which are significantly faster than long multiplication. Long multiplication of two -digit numbers will typically take single-digit multiplications (and another  -digit additions). The fastest known algorithm is due to David Harvey and Joris van der Hoeven, and requires a number of steps proportional to , which for large values of is a significant improvement.   Have you ever wondered how computers actually calculate things? Computers can only ever do finitely many steps with finitely many bits of information. The inputs in a calculation are numbers represented by finitely many (decimal or binary) digits, for example and . You probably learned in primary school how to do long addition or multiplication with pencil and paper, and you could imagine that your computer might follow a similar algorithm and compute in a finite number of steps. But then how does it calculate or , or other non-polynomial functions?  The solution is to approximate the function using a power series . For example, the computer approximates by adding finitely many terms of In other words, it approximates the function  via the power series     Factorials  Here is  factorial . It grows really fast: The factorial satifies the useful property that , meaning that fractions with factorials in the numerator and denominator will often allow lots of cancellation.   Challenge: Determine the number of zeroes at the end of the decimal expression for    How does the computer know how many of these terms to add? The short answer is: as many as needed to get the required level of accuracy. The long answer is much more complicated, and is the subject of a whole other area of Mathematics called Numerical Analysis .  How does the computer know to use this particular series? And what even is a series? That's what we'll learn in this chapter!       Infinite Series  Let's look carefully at the calculation . We will add the terms one by one and keep an eye on the cumulative total, more formally known as the partial sums :    Number of Terms  Partial Sum  Value                                  If you're viewing this online, you can compute this yourself by running the following Sage cell:   This computation is actually quite inefficient, since we're calculating each term from scratch. Notice that the term is obtained by multiplying the previous term by : Firstly, this allows us to calculate the sum more efficiently:  Efficiency  We do we care about efficiency? Aren't modern computers plenty fast enough? For this example, yes. But there are often cases where we need to compute efficiently, for example in mobile devices with limited power, or calculations that need to be repeated millions of times per second, for example in computer graphics.   Secondly, as we add more terms, gets ever bigger while stays the same, so the multiplier we use to get from one term to the next gets ever smaller. This means that the terms shrink to zero exponentially and we will see in the next chapter ( ) that the sum converges for every value of .  In the above calculation, we have only computed finitely many terms, which is all one ever needs for applications. Mathematically, however, is an infinite series, and its value represents the sum of all infinitely many terms. What can this mean?  We have seen that the partial sums tend to , and this limit is defined to the be sum of the infinite series:     Given a sequence  of real numbers (the terms), we define the series  to be the limit of the partial sums (running totals) of the terms, provided that this limit exists.  If the limit exists, we say that the series converges . Otherwise, it diverges.     We will learn more about convergence and divergence in the next chapter. For now, we're interested in using infinite series to represent useful functions, like , or .       Power Series  Our first example above shows that the function can be expressed as an infinite series in the following form: Note that each term consists of a coefficient (for example ) multiplied by some power of the variable (for example ), so this is an example of what we call a power series . Power series are particularly useful, as we can approximate them by the sum of the first few terms, which is then a polynomial. We're very comfortable with polynomials. shows how the first few partial sums of the series approximate the function .  Approximation to by various partial sums of its power series   A plot of together with plots of the partial sums of its power series of degrees and .     Power series aren't the only way to represent interesting functions: there are also other types of series, infinite products, continued fractions...    Assuming for now that the series converges, how do we know this is even true? How does one find such a series?       Maclaurin Series  Let's suppose for the moment that a power series representation for a function  exists , but we don't know what the coefficients should be: We can find the value of the first coefficient by the clever trick of plugging into : What about the next coefficient? We use an even cleverer trick: differentiating the series kills the first coefficient and decreases the exponent in all other coefficients: Plugging into this gives us . Let's differentiate another time: so , next , etc. In general, we find   Maclaurin   Let be an open interval, and suppose that the power series converges to for . Then, for ,      Use induction on to prove that the expression in is correct.   The series expansion is called the Maclaurin series for the function .  So now that we know how to create power series for functions using their derivatives, let's do the same for two more important functions:    Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to odd powers of , and odd numbers are of the form . The then ensures the alternating signs.      Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to even powers of , and even numbers are of the form . The then ensures the alternating signs.    Let's record the Maclaurin series we have found thus far:        Euler's Formula  You may have noticed that the Maclaurin series for and all look very similar - the series for has exactly the same terms as the series for , except for the differences in signs.  It turns out we can fix these signs if we subsitute , where is the imaginary unit. Using the fact that we find that     Euler   For we have    In particular, if we set , we obtain the following amazing formula, which combines the five most important constants in Mathematics:   The most beautiful formula  A survey at the 2006 International Congress of Mathematicians in Madrid, Spain, asked delegates from all over the world what they thought was the most beautiful mathematical formula. The winner, by far, was Euler's formula .         Maclaurin Polynomials  Now we have a method for obtaining power series expressions for functions. But these are infinite series, and for most applications we want to approximate our functions with finite polynomials. That's really easy - we just cut off the series after a finite number of terms:     The degree Maclaurin polynomial of a function is      Note that the degree Maclaurin polynomial will generally consist of terms. However, it will have degree less than if the coefficient of equals zero, for example   The degree 0 Maclaurin polynomial of is not very interesting, it's the just the constant function .  You'll recognise the degree 1 Maclaurin polynomial : its graph is the tangent to at . We also call it the linear approximation to , it is the linear function that most closely approximates near .  Similarly, the degree 2 Maclaurin polynomial is called the quadratic approximation to . It is the quadratic function closest to near .  The following Sage cell let's you plot the Maclaurin polynomials for and . Notice that when we increase the order (i.e. the number of terms in the Maclaurin polynomial), the approximation of the function about improves:    Computer algebra systems  Computer Algebra Systems usually have a command for calculating Maclaurin series. For example, the following shows part of the output from a Wolfram Alpha query.     We have already seen Sage code to compute Maclaurin series, here is the simplest code:         Advanced Topics   Computing     It's not hard to show, using repeated differentiation, that the Maclaurin series for is Since , this gives us an infinite series converging to . The Sage cell below computes the partial sums of this series up to some :    As you can see from this computation, convergence is extremely slow. See how big you must make N in the above code before you get two correct digits after the decimal point.  One can compute much faster by using identities such as the following, due to John Machin (in 1706):    Modern algorithms to compute are more sophisticated and much faster still, see . We mention only one method, the BBP (Bailey-Borwein-Plouffe) Algorithm: This formula not only converges extremely quickly, but it also allows you to compute specific hexadecimal digits of without first computing the previous digits.     A function without Maclaurin series  Consider the function This function is well-defined and continuous at . You can compute the limit    Plot of   Plot of    One can show that this function is well-defined and differentiable. In fact, for we have (check this yourself): The plot in is suspiciously flat near , and in fact we have Therefore, the Maclaurin series for is identically zero! So this function does not equal its Maclaurin series.  Replacing by in the power series for , we get This is not strictly a power series, but a Laurent series , which converges for . The Sage cell belows plots the Laurent polynomial for .   Here we see that the partial sums approximate well for large , but not for small .    Other types of series  For one can show that the following infinite series converges: This defines the zeta-function , a fascinating function defined by a series other than a power series. Later we will see that is related to the distribution of prime numbers. When is an even integer, it takes on very interesting values: Its values at the odd integers are much more mysterious.    Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .     Infinite products  Instead of adding infinitely many terms, one might also multiply them. Thus one may express some functions as infinite products, for example Such products can only converge if the factors tend to (not ) as tends to infinity.  You can plot the finite products against and in the following Sage cells:     Try out your own Sage computations here:    "
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
  "number": "7.1",
  "title": "",
  "body": "  Given a sequence  of real numbers (the terms), we define the series  to be the limit of the partial sums (running totals) of the terms, provided that this limit exists.  If the limit exists, we say that the series converges . Otherwise, it diverges.    "
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
  "number": "7.3",
  "title": "",
  "body": " Maclaurin   Let be an open interval, and suppose that the power series converges to for . Then, for ,    "
},
{
  "id": "sec-Maclaurin-Series-4",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Series-4",
  "type": "Checkpoint",
  "number": "7.4",
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
  "number": "7.5",
  "title": "",
  "body": "  Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to odd powers of , and odd numbers are of the form . The then ensures the alternating signs.   "
},
{
  "id": "sec-Maclaurin-Series-8",
  "level": "2",
  "url": "Chap-Calculus_1.html#sec-Maclaurin-Series-8",
  "type": "Example",
  "number": "7.6",
  "title": "",
  "body": "  Compute the Maclaurin series for .         We compute the derivatives of : thereafter, the pattern repeats, so again, etc.  Plugging in , we get   Now we put it all together: To get the last expression, note that the non-zero terms correspond to even powers of , and even numbers are of the form . The then ensures the alternating signs.   "
},
{
  "id": "thm-eulers-formula",
  "level": "2",
  "url": "Chap-Calculus_1.html#thm-eulers-formula",
  "type": "Theorem",
  "number": "7.7",
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
  "number": "7.9",
  "title": "Computer algebra systems.",
  "body": " Computer algebra systems  Computer Algebra Systems usually have a command for calculating Maclaurin series. For example, the following shows part of the output from a Wolfram Alpha query.     We have already seen Sage code to compute Maclaurin series, here is the simplest code:   "
},
{
  "id": "fig-exp-minus-1-over-x-squared",
  "level": "2",
  "url": "Chap-Calculus_1.html#fig-exp-minus-1-over-x-squared",
  "type": "Figure",
  "number": "7.11",
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
  "number": "7.12",
  "title": "",
  "body": "  Show that in other words, the harmonic series  diverges.   Show that the partial sum is greater than the integral .  "
},
{
  "id": "Calculus_2",
  "level": "1",
  "url": "Calculus_2.html",
  "type": "Chapter",
  "number": "8",
  "title": "CA8: Taylor Series",
  "body": "    CA8: Taylor Series         Taylor series   Plot of and its degree 5 Maclaurin polynomial.   Plot of and its degree 5 Maclaurin polynomial. The polynomial starts diverging visibly from the plot of when .     compares to its degree 5 Maclaurin polynomial. We notice that the polynomial is a poor approximation of when . What can we do about this? We could use Maclaurin polynomials of ever higher degree, but these get ever more complicated.  The issue is that Maclaurin series are computed based on the value of the function and its derivatives around , so it's not surprising that they best approximate the function near If for some reason we're more interested in the function near another value, say near , then instead of computing Maclaurin polynomials of high degree, we can simply shift our function along the -axis until the point of interest lies above , compute the Maclaurin polynomials of the shifted function, and then shift back.  In other words, we consider the shifted function , then compute the Maclaurin series for : Finally, we shift back to obtain a power series for : This is the Taylor series for  centred at  .   Taylor Series   The series,   .  is called the Taylor series for about     Note that a Maclaurin series is simply a Taylor series centred at   The degree  Taylor polynomial of centred at is - you guessed it - the sum of the terms of the Taylor series of degree at most . The degree Taylor polynomial of a function is also called its nth order approximation .    Compute the Taylor series of the function centred at .    We compute the derivatives of at : Thus      Degree 3 Taylor polynomial of centred at   Plot of and its degree 3 Taylor polynomial centered at .    The Sage cell below plots the Taylor polynomial for a function centred at some .    Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is      Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is      Example Tasks   Find the Taylor series for about     Find the Taylor polynomial of degree for about     Find the Taylor polynomial of degree for about     Find the rd degree Taylor polynomial for about      A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.        Geometric series  So far, we have succeeded in finding various useful power series expressions for the functions , and . What about other functions? A particularly instructive case is the function   We can compute its derivatives by hand, but that quickly gets old, so we'll ask the computer instead:   We notice that (Note that Sage often formats the answer differently, swapping the and around, leading to alternating signs.)   Use induction on to prove that the formula in is correct.   This allows us to write down the Maclaurin series for :    Prove that, for every , Deduce that    You can use induction on , or just multiply out and cancel terms.   Assuming that , deduce from .   Take the limit as .   We compute since as because .    The series in is an example of a geometric series (sometimes also called a geometric progression ). More generally, a geometric series is one of the form Here is the starting term, and each subsequent term equals the previous terms multiplied by , which we call the common ratio .  Let's plot the various Maclaurin polynomials for :   Maclaurin polynomials for   Plot of the Maclaurin polynomials for . Note how they only approximate when .    We immediately notice that the Maclaurin polynomials are wildy different from when .    Convergence issues  Of course, the problem is that the series does not converge unless - after all, if , then the individual terms do not shrink to zero, and the partial sums cannot converge to a limit. This is true for all series:   The Divergence Test   If the terms of the series do not approach as then the series diverges.    This is obvious if you think about it: if the series converges, then the partial sums (running totals) tend to some fixed limit. But this means that the changes from one partial sum to the next (i.e. the terms of the series) must shrink to zero.  We will soon see that the converse is not true: there are series, whose terms tend to zero, but which nevertheless diverge. One can think of this problem as the terms not tending to zero fast enough.    Geometric Series   A geometric series converges if and only if , in which case it converges to      If , then does not equal zero, so by the Divergence Test, the series diverges.  Now suppose that . By the result of , we have So since as because .    Repeating decimals are also geometric series:      Ratio test  Most series aren't obligingly geometric series, but a similar principle applies: if the ratios of consecutive terms stay small (specifically, tend to a value strictly between and ), then we can expect convergence:   The Ratio Test   For the series , let . If  then the series converges  then the series diverges  then the test is inconclusive       We can actually do slightly better: in the Ratio Test we can replace by .  If you don't yet know what a limsup is, here is another way of putting it: If there exists a number , such that for all sufficiently large , then the series converges.  The idea is simply that, in this case, the terms in the series shrink to zero faster than the terms of a (convergent) geometric series with common ratio , and thus it must also converge.   In other courses you will learn more about convergence of series and in particular you will see more convergence tests. Annoyingly, all convergence tests have cases in which they're inconclusive. One can actually prove that, in a suitable technical sense, a universal convergence test cannot exist.    Determine the nature of the series     Convergent.    To use the ratio test consider   Thus   Since , by the ratio test this series converges. (Notice that the ratio test doesn't tell us to what number the series converges to. In this case it happens to be .)      Convergence of power series  It turns out that the Ratio Test is well suited for testing the convergence of power series. Consider a general power series, of the form We'd like to know for which values of this series converges. After all, if the series doesn't converge for a particular , then it tells us nothing about the value of the function at .  Firstly, when , then obviously converges to the first term . In other words, a power series always converges at its centre.   For other values of , we apply the Ratio Test. To do so, we check the (absolute values of) ratios of consecutive terms, and try to determine if they converge to something smaller than 1. Due to the nature of power series, there is some cancellation in this ratio: For the Ratio Test to apply, this must converge to some as . This depends on the ratios of the coefficients of the power series. Assuming the ratios converge to something, we find three possibilities.   Case 1. If then the series converges for all :   Consider the Maclaurin series for : Here Thus the Maclaurin series for converges for all values of .  It's not hard to show that the same holds for the Taylor series of , and about any centre. The reason is that the derivatives are bounded (by in the case of , and by in the case of or ), thus in the Ratio Test calculation, the factorials in the denominators dominate everything.     Case 2. If then the series converges for and diverges if : This will converge if , i.e. when .  In this case, we call the radius of convergence of the power series. Basically, the series converges if the distance from to the centre is less than the radius of convergence . If this distance is greater than , then the series diverges.  In other words, the series converges for inside the open interval , and diverges outside the closed interval .  What happens on the endpoints of these intervals, i.e. when ? The Ratio Test tells us nothing. All we know at this point is that there is an interval of convergence , of the form But we won't worry about convergence at the endpoints in this course.   Where's the circle?  Why is the radius of convergence called a radius? Where's the circle?  The answer becomes clear when we consider the variable to be a complex number, rather than just a real number. Everything we've done up to now also makes sense over complex number, especially power series, and in this case the interval of convergence turns out to be a disk of convergence. The series will converge for , and this region defines a disk in the complex plane, centered at , with radius .     Compute the radius of convergence of .    We use the Ratio Test: because Now when . So we find that the series converges for , i.e. on the interval , and the radius of convergence is .     Case 3. If then the series diverges for all : so unless . In this case we say the radius of convergence is zero: .  Just to round things off, in the first case, where the series converges for all , we say that it has infinite radius of convergence .       Algebra of infinite series  Computing repeated derivatives gets old really quickly. Often a much quicker way to get power series expansions for given functions is to manipulate a known series.  In below we have listed the Maclaurin series for a small set of basic functions of science and engineering. These series can all be relatively easily derived from first principals as discussed in previous lectures. However, for some more complex functions it is easier to find their Maclaurin series by starting from known series rather than trying to find the series from scratch. We will look at two commonly used techniques:    Manipulating\/Substituting into known series.  Differentiating\/Integrating known series.     Some Important Maclaurin Series (and their intervals of convergence):                                     Manipulating\/Substituting into Known Series    Find the Maclaurin series for        We know that the Maclaurin series for on is   We can use this series by replacing with to obtain   which will converge on the interval i.e.,       Find the Maclaurin series for        Once again we will use the Maclaurin series for on Now   which will converge on the interval i.e.,       Find the Maclaurin series for        Substituting into the Maclaurin series for , we obtain   which will converge for all real values of     Differentiating\/Integrating Known Series  As the theorem below says, we can also use differentiation and integration to work out new Maclaurin series expansions from ones that we already know. The proof of this theorem is beyond the scope of this course.    If with radius of convergence then    with radius of convergence ,  with radius of convergence (where ).     Note that the behaviour of the series (i.e. whether it converges or diverges) at the endpoints may change when it is differentiated or integrated.    Find the Maclaurin series for        Notice that or put the other way, Since we know the Maclaurin series for we can differentiate this series to obtain the Maclaurin series for So, on        Find the Maclaurin series for        Notice that or put the other way, . Since we know the Maclaurin series for we can integrate this series to obtain the Maclaurin series for So, on    Since is when we have Thus on       Example Tasks   Find the Maclaurin series for     Find the Maclaurin series for     Find the Maclaurin series for     Find the Maclaurin series for     Use a sixth degree Maclaurin polynomial to estimate       Advanced topics   Why radius 1?  In we worked out the Maclaurin series of and found that it has radius of convergence .  What's wrong with this function? The plot in shows a perfectly well-behaved function, defined on all of , but its Maclaurin polynomials are all over the place when . Why is the radius of convergence so small?   Approximations to by its Maclaurin polynomials up to degree 30.   A plot of together with plots of its Maclaurin polynomials up to degree 30.    The answer becomes clear if we view as a function of a complex variable! Over the complex numbers, the denominator vanishes at , so the function blows up at these values. These are at distance 1 from the origin, so the disc of convergence in the complex plane cannot include these points, and so the radius of this disc (the radius of convergence!) cannot be larger than 1.  In fact, it is a result from Complex Analysis that the radius of convergence of the Taylor series of an analytic function is always the distance from the centre of the Taylor series to the nearest singularity of the function. In our case, this distance is 1.      "
},
{
  "id": "fig-plot-sin-T5",
  "level": "2",
  "url": "Calculus_2.html#fig-plot-sin-T5",
  "type": "Figure",
  "number": "8.1",
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
  "number": "8.2",
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
  "number": "8.3",
  "title": "",
  "body": "  Compute the Taylor series of the function centred at .    We compute the derivatives of at : Thus    "
},
{
  "id": "fig-plot-cos-T3",
  "level": "2",
  "url": "Calculus_2.html#fig-plot-cos-T3",
  "type": "Figure",
  "number": "8.4",
  "title": "",
  "body": " Degree 3 Taylor polynomial of centred at   Plot of and its degree 3 Taylor polynomial centered at .   "
},
{
  "id": "Second_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Calculus_2.html#Second_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "8.5",
  "title": "",
  "body": " Find the second order approximation to about       In order to find the second order approximation for about we need to evaluate and its first two derivatives at . So,   Thus the second order approximation for about (or the Taylor polynomial of degree for about ), is    "
},
{
  "id": "Fourth_order_approximation_e_power_minus_x_on_3",
  "level": "2",
  "url": "Calculus_2.html#Fourth_order_approximation_e_power_minus_x_on_3",
  "type": "Example",
  "number": "8.6",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about       Since we already know the Taylor series for about we can obtain the degree Taylor polynomial for about as follows   Thus the degree Taylor polynomial is    "
},
{
  "id": "sec-Taylor-series-15-2",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-15-2",
  "type": "Exercise",
  "number": "8.1.1",
  "title": "",
  "body": " Find the Taylor series for about   "
},
{
  "id": "sec-Taylor-series-15-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-15-3",
  "type": "Exercise",
  "number": "8.1.2",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "sec-Taylor-series-15-4",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-15-4",
  "type": "Exercise",
  "number": "8.1.3",
  "title": "",
  "body": " Find the Taylor polynomial of degree for about   "
},
{
  "id": "sec-Taylor-series-15-5",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-15-5",
  "type": "Exercise",
  "number": "8.1.4",
  "title": "",
  "body": " Find the rd degree Taylor polynomial for about   "
},
{
  "id": "sec-Taylor-series-16",
  "level": "2",
  "url": "Calculus_2.html#sec-Taylor-series-16",
  "type": "Remark",
  "number": "8.7",
  "title": "A little remark.",
  "body": " A little remark  Computer algebra systems usually have commands for Taylor series. For example, here in is an example of a query to Wolfram Alpha that will work.     "
},
{
  "id": "sec-Geometric-series-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Geometric-series-6",
  "type": "Checkpoint",
  "number": "8.9",
  "title": "",
  "body": " Use induction on to prove that the formula in is correct.  "
},
{
  "id": "ex-GS",
  "level": "2",
  "url": "Calculus_2.html#ex-GS",
  "type": "Checkpoint",
  "number": "8.10",
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
  "number": "8.11",
  "title": "",
  "body": " Maclaurin polynomials for   Plot of the Maclaurin polynomials for . Note how they only approximate when .   "
},
{
  "id": "sec-Convergence-issues-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-3",
  "type": "Theorem",
  "number": "8.12",
  "title": "The Divergence Test.",
  "body": " The Divergence Test   If the terms of the series do not approach as then the series diverges.   "
},
{
  "id": "sec-Convergence-issues-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-6",
  "type": "Theorem",
  "number": "8.13",
  "title": "Geometric Series.",
  "body": " Geometric Series   A geometric series converges if and only if , in which case it converges to    "
},
{
  "id": "sec-Convergence-issues-7",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-7",
  "type": "Proof",
  "number": "8.3.1",
  "title": "",
  "body": " If , then does not equal zero, so by the Divergence Test, the series diverges.  Now suppose that . By the result of , we have So since as because .  "
},
{
  "id": "sec-Convergence-issues-8",
  "level": "2",
  "url": "Calculus_2.html#sec-Convergence-issues-8",
  "type": "Example",
  "number": "8.14",
  "title": "",
  "body": " Repeating decimals are also geometric series:   "
},
{
  "id": "sec-Ratio-test-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Ratio-test-3",
  "type": "Theorem",
  "number": "8.15",
  "title": "The Ratio Test.",
  "body": " The Ratio Test   For the series , let . If  then the series converges  then the series diverges  then the test is inconclusive     "
},
{
  "id": "Ex-Ratio_test",
  "level": "2",
  "url": "Calculus_2.html#Ex-Ratio_test",
  "type": "Example",
  "number": "8.16",
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
  "number": "8.18",
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
  "number": "8.19",
  "title": "Some Important Maclaurin Series (and their intervals of convergence):",
  "body": " Some Important Maclaurin Series (and their intervals of convergence):                                    "
},
{
  "id": "Maclaurin_series_1_on_1_plus_x2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_1_on_1_plus_x2",
  "type": "Example",
  "number": "8.20",
  "title": "",
  "body": "  Find the Maclaurin series for        We know that the Maclaurin series for on is   We can use this series by replacing with to obtain   which will converge on the interval i.e.,    "
},
{
  "id": "Maclaurin_series_x_on_2_minus_5x",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_x_on_2_minus_5x",
  "type": "Example",
  "number": "8.21",
  "title": "",
  "body": "  Find the Maclaurin series for        Once again we will use the Maclaurin series for on Now   which will converge on the interval i.e.,    "
},
{
  "id": "Maclaurin_series_e_minus_x_2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_e_minus_x_2",
  "type": "Example",
  "number": "8.22",
  "title": "",
  "body": "  Find the Maclaurin series for        Substituting into the Maclaurin series for , we obtain   which will converge for all real values of    "
},
{
  "id": "sec-Algebra-of-infinite-series-12",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-12",
  "type": "Theorem",
  "number": "8.23",
  "title": "",
  "body": "  If with radius of convergence then    with radius of convergence ,  with radius of convergence (where ).    "
},
{
  "id": "Maclaurin_series_1_on_1_minus_x_power_2",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_1_on_1_minus_x_power_2",
  "type": "Example",
  "number": "8.24",
  "title": "",
  "body": "  Find the Maclaurin series for        Notice that or put the other way, Since we know the Maclaurin series for we can differentiate this series to obtain the Maclaurin series for So, on     "
},
{
  "id": "Maclaurin_series_ln_1_plus_x",
  "level": "2",
  "url": "Calculus_2.html#Maclaurin_series_ln_1_plus_x",
  "type": "Example",
  "number": "8.25",
  "title": "",
  "body": "  Find the Maclaurin series for        Notice that or put the other way, . Since we know the Maclaurin series for we can integrate this series to obtain the Maclaurin series for So, on    Since is when we have Thus on     "
},
{
  "id": "sec-Algebra-of-infinite-series-16-2",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-2",
  "type": "Exercise",
  "number": "8.6.1",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-3",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-3",
  "type": "Exercise",
  "number": "8.6.2",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-4",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-4",
  "type": "Exercise",
  "number": "8.6.3",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-5",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-5",
  "type": "Exercise",
  "number": "8.6.4",
  "title": "",
  "body": " Find the Maclaurin series for   "
},
{
  "id": "sec-Algebra-of-infinite-series-16-6",
  "level": "2",
  "url": "Calculus_2.html#sec-Algebra-of-infinite-series-16-6",
  "type": "Exercise",
  "number": "8.6.5",
  "title": "",
  "body": " Use a sixth degree Maclaurin polynomial to estimate   "
},
{
  "id": "fig-1-over-x-squared",
  "level": "2",
  "url": "Calculus_2.html#fig-1-over-x-squared",
  "type": "Figure",
  "number": "8.26",
  "title": "",
  "body": " Approximations to by its Maclaurin polynomials up to degree 30.   A plot of together with plots of its Maclaurin polynomials up to degree 30.   "
},
{
  "id": "Differential_Equations_1",
  "level": "1",
  "url": "Differential_Equations_1.html",
  "type": "Chapter",
  "number": "9",
  "title": "DE1: Introduction",
  "body": "    DE1: Introduction            Introduction  Most of the equations that we have come across so far in our mathematical \"upbringing\" have imposed conditions that a number is required to satisfy.   Let be a real number. Solve       By factoring the left hand side we obtain   Thus we have found the numbers that satisfy the conditions imposed by the equation. Notice that we can check our answers by substituting back into the original equation. For example, when , By way of terminology, we would say that is a solution to the equation whereas the set of all solutions is . An equivalent terminology (which we will use subsequently) is is a particular solution whereas is the general solution for this equation.     Let be a real number. Solve    The strategy that we used for solving the equation in won't work for this equation. In fact we cannot write down the solution (or solutions) to this equation in closed form. Thus we adopt the strategy of finding an approximation to the solutions.  We could do this geometrically by plotting the graphs of and and looking at the points of intersection.    As can be seen in , there will be an infinite number of solutions to this equation. One solution is . There is another solution between and and so on.  Another way of approximating the solution would be numerically. We could use Newton’s method for example. Starting with an initial guess of our next guess is , and so on.    Mathematical models in science and engineering often throw up a situation where information about a function's derivative (or derivatives) is known. From here, we usually want to deduce information about the function itself.   It has been observed that an object cools at a rate proportional to the difference between the object's temperature and ambient temperature. Write down an equation that conveys this observation.   Let be the temperature of the object at time after we begin the observation. Also let be the ambient temperature. Then where is a constant.    As illustrated in , we were able to write the information known about the situation in terms of an equation involving the function and the derivative of the function even though we didn’t know what the actual function was. Such an equation is called a differential equation (DE). Having determined the differential equation, we now want to find a function that satisfies the equation, i.e. we want to find a solution to the DE.   ( cont.)  Assuming that the ambient temperature is fixed, what can we say happens to the temperature of the body over time?   Solutions to the DE for the temperature of the cooling body are of the form where is an arbitrary constant. Even though we haven't yet looked at the method for finding this solution we can check that it is correct by substituting back into the original equation. Here and Once we know the function itself we can now answer questions concerning the temperature of the cooling body over time. For example we see that over time, the temperature of the body starts out at and falls exponentially toward . See .        A population of bacteria reproduces at a rate proportional to the population. If the population of bacteria is at the beginning of the study, predict the behaviour of this population over time.   Let be the number of bacteria present at time after the study begins. Then where is some positive constant. Thus, even though we don’t know what the actual function, , is we have written a differential equation that the function must satisfy. Note that we also know that the function must satisfy .     An object is dropped from a hot air balloon above the surface of the earth. Assuming that the only forces acting on the object are gravity (acting down) and air resistance (acting up) determine the velocity of the object as a function of time.   Let be the velocity of the object at time seconds after it was dropped and let the downward direction be the positive direction. Now, Newton’s second law of motion says that the acceleration, , of a body and the net force, , acting on that body are related according to where is the mass of the body. Also we know that The net force on the free falling object will be where is the force due to gravity ( is gravitational constant) and is the force due to the air resistance. Assuming that is proportional to the square of the speed of the object, we have , where the (positive) constant of proportionality will depend on the shape of the object (amongst other things). Thus, from Newton’s second law, the function satisfies This is a differential equation involving the (as yet unknown) function .    As these examples illustrate, differential equations can be used to model real world systems. In these models the differential equation captures the interaction of the quantities in the system. The solution to the differential equation describes the behaviour of the system.  In this strand of Math1120 we are going to look at techniques for finding solutions to differential equations. There is no one technique that will solve all differential equations and there are differential equations for which we can only approximate solutions. However, the methods that have been developed usually work for a particular type or class of differential equation. Thus it is important to be able to classify our differential equations into these various classes. We will learn how to do this as we go along. As a first step in this direction we need some basic definitions and terminology.   An equation that involves an unknown function, , derivatives of that function and the independent variable is called a differential equation (DE).  The order of a DE is the order of the highest derivative that appears in the equation.  A particular solution for the DE is a function that satisfies the equation.  The general solution of the DE is a description of all possible solutions.    What is the order of each the following of the DEs? Using your knowledge of the basic functions of science and engineering try to guess a solution to each DE.           First order differential equation;  First order differential equation;  Second order differential equation;  Second order differential equation;  Second order differential equation;      Because this equation only involves the first derivative of the function it is a first order differential equation. Next, since the differential equation is of the form   we can solve it by simple anti-differentiation. Thus Note that this solution is the general solution to the DE, it is a description of all possible solutions to the equation. As shown in , when we graph all of the functions in this general solution they fill the entire plane but there are no points of intersection.   A solution with a given value of would be a particular solution of the DE, for example This particular solution is highlighted in .   Again this is a first order DE since the highest derivative in the equation is a first derivative. In this case we can't solve the equation via anti-differentiation. However, given that the equation says that the function must be such that its derivative must be equal to the negative of itself it would be reasonable to guess that the function must be an exponential function. For we can see that and so try instead . Then and so we have found a (particular) solution.  This DE contains a second derivative and hence is of order 2. Again we can find a solution by simple anti-differentiation. Since by anti-differentiating we obtain and on anti-differentiating again This is the general solution to the DE. Notice that this 2nd order DE has two arbitrary constants in its general solution.  This DE is also a 2nd order DE but we can't get the solution by anti-differentiation. Thus (at this stage) we have to try to guess. What function is the negative of its second derivative? We could try an exponential function (as we did in part ), i.e. Then which isn't quite what we wanted. Another possible candidate would be the sine or cosine function. So let us now try Then which is what we wanted and so we have found a solution.  This DE contains both the first and second derivative. However since the highest derivative is the second derivative this equation is a 2nd order DE. The most obvious candidate for a solution to this DE would be an exponential function so let's try In this case and and hence . Thus we have found one solution to the DE.     In general a differential equation will have infinitely many solutions. These solutions take the form of a family of functions containing some arbitrary constants. In practical problems, we usually want to select one function out of this infinite family of functions. We do this by specifying additional data, often in the form of initial values for the function and, if appropriate, its derivatives. We call such a problem an initial-value problem .   The differential equation has the general solution . Confirm that this is a solution and then solve the initial-value problem    To confirm that all of the functions are solutions we just need to show that these functions satisfy the equation. Now , and so they are solutions.  To solve the initial-value problem we have to find the value of that ensures that the solution satisfies the initial condition. Now if then . Thus the solution to the initial-value problem is .     Example Tasks   Determine the value (if any) of the constants and such that  is a solution to the DE    Guess a solution to the DE .          Direction Fields and Euler's Method  So far, the only methods that we have seen for actually solving a DE are anti-differentiation and guess and check. Clearly, these methods are very limited in their scope. Before looking at some methods for finding solutions to DEs in closed form, we will look at two methods by which we can approximate solutions to first order DEs, i.e. to DEs of the form    Direction Fields  The first method that we will look at aims to \"draw\" the solutions to the DE. If is the solution to the DE that passes through the point then the slope of the tangent to at is . So if we draw a small line segment passing through the point with slope (i.e. a small part of the tangent line) this will approximate the graph of the solution at this point. A plot showing these small line segments for many points is called a direction field for the DE.   Sketch the direction field for the DE Use this direction field to sketch the graph of the solution to the DE satisfying the initial condition .   Rearranging this first order DE in the form gives , i.e. . Now, at the point the slope of the tangent to will be So draw a small segment of the line passing through the point with slope , as shown in .   Repeating for many points in the plane gives the direction field for the DE shown in .   Notice that from this direction field we can see the general shape of the family of solutions to the DE. We can also sketch any particular solution that we want. The particular solution satisfying has been constructed in .     Sketch the direction field for the DE Describe the long term behaviour of the solutions to this DE.   Note : A first order DE is called autonomous if it is of the form and so this is an example of a first order autonomous DE.   Notice that for this DE the functions are solutions and that for these solutions . (These solutions are called steady state solutions since does not vary along these solutions). Notice also that at any point whose coordinate is greater than , . Similarly for those points with coordinate satisfying , and for those points with coordinate satisfying , . These observations allow us to very quickly make a sketch of the direction field. The direction field for this DE is shown in .  From the direction field we can see that the behaviour of the solution for large values of depends on the initial condition that the solution satisfies. If then as whereas if then as .         The Sage cell below can be used to plot the direction field of , as well as a particular solution for some initial point.     Euler's Method  The second method that we will look at aims to approximate the solution to the initial-value problem numerically (i.e to produce a table of values for the function). Given a point on the graph of the solution , Euler’s method approximates the next point on the graph of using the linear approximation Thus if , where is small, then    Euler's Method (for solving the initial-value problem )   Choose a step size  Begin at the point  Move from one point on the solution to the next point on the solution by:    Note that the accuracy of Euler's method will depend on both the step size used and the distance from the initial known point on the solution.   Consider the initial-value problem: Estimate using Euler's method with step size         .  .      Here .   Let . Then with we have Thus the Euler estimate is .  Again, begin with . Using we will need two iterations to reach . The first iteration gives Now complete the second iteration Thus the Euler estimate is .  With we will need 4 iterations to reach . We can conveniently summarise the calculations via a table                                               Thus the Euler estimate is    Note that the exact solution to this initial-value problem is and hence (to 4 d.p.). shows how the Euler solution with compares with the exact solution.        Consider the DE Use Euler's method with to estimate .      Using the table layout:                                                Thus the Euler estimate is      The Sage cell below can be used to approximate using Euler's method for some step-size and initial point .     Example Tasks   At time the population density of the Striped Dingbat is modelled by the function . This function satisﬁes the DE where and are positive constants.   Find all steady-state solutions to this DE.  By considering the direction ﬁeld, explain how this model predicts the long-term Striped Dingbat population.     The direction field for the DE is shown below. Sketch the solution satisfying the initial condition           Consider the initial-value problem Use Euler's method with to estimate .       "
},
{
  "id": "introduction-2",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "number "
},
{
  "id": "Ex_1",
  "level": "2",
  "url": "Differential_Equations_1.html#Ex_1",
  "type": "Example",
  "number": "9.1",
  "title": "",
  "body": " Let be a real number. Solve       By factoring the left hand side we obtain   Thus we have found the numbers that satisfy the conditions imposed by the equation. Notice that we can check our answers by substituting back into the original equation. For example, when , By way of terminology, we would say that is a solution to the equation whereas the set of all solutions is . An equivalent terminology (which we will use subsequently) is is a particular solution whereas is the general solution for this equation.   "
},
{
  "id": "introduction-4",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-4",
  "type": "Example",
  "number": "9.2",
  "title": "",
  "body": " Let be a real number. Solve    The strategy that we used for solving the equation in won't work for this equation. In fact we cannot write down the solution (or solutions) to this equation in closed form. Thus we adopt the strategy of finding an approximation to the solutions.  We could do this geometrically by plotting the graphs of and and looking at the points of intersection.    As can be seen in , there will be an infinite number of solutions to this equation. One solution is . There is another solution between and and so on.  Another way of approximating the solution would be numerically. We could use Newton’s method for example. Starting with an initial guess of our next guess is , and so on.   "
},
{
  "id": "Ex_3",
  "level": "2",
  "url": "Differential_Equations_1.html#Ex_3",
  "type": "Example",
  "number": "9.4",
  "title": "",
  "body": " It has been observed that an object cools at a rate proportional to the difference between the object's temperature and ambient temperature. Write down an equation that conveys this observation.   Let be the temperature of the object at time after we begin the observation. Also let be the ambient temperature. Then where is a constant.   "
},
{
  "id": "introduction-7",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "information differential equation function "
},
{
  "id": "introduction-8",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-8",
  "type": "Example",
  "number": "9.5",
  "title": "(Example 9.4 cont.).",
  "body": " ( cont.)  Assuming that the ambient temperature is fixed, what can we say happens to the temperature of the body over time?   Solutions to the DE for the temperature of the cooling body are of the form where is an arbitrary constant. Even though we haven't yet looked at the method for finding this solution we can check that it is correct by substituting back into the original equation. Here and Once we know the function itself we can now answer questions concerning the temperature of the cooling body over time. For example we see that over time, the temperature of the body starts out at and falls exponentially toward . See .      "
},
{
  "id": "introduction-9",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-9",
  "type": "Example",
  "number": "9.7",
  "title": "",
  "body": " A population of bacteria reproduces at a rate proportional to the population. If the population of bacteria is at the beginning of the study, predict the behaviour of this population over time.   Let be the number of bacteria present at time after the study begins. Then where is some positive constant. Thus, even though we don’t know what the actual function, , is we have written a differential equation that the function must satisfy. Note that we also know that the function must satisfy .   "
},
{
  "id": "introduction-10",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-10",
  "type": "Example",
  "number": "9.8",
  "title": "",
  "body": " An object is dropped from a hot air balloon above the surface of the earth. Assuming that the only forces acting on the object are gravity (acting down) and air resistance (acting up) determine the velocity of the object as a function of time.   Let be the velocity of the object at time seconds after it was dropped and let the downward direction be the positive direction. Now, Newton’s second law of motion says that the acceleration, , of a body and the net force, , acting on that body are related according to where is the mass of the body. Also we know that The net force on the free falling object will be where is the force due to gravity ( is gravitational constant) and is the force due to the air resistance. Assuming that is proportional to the square of the speed of the object, we have , where the (positive) constant of proportionality will depend on the shape of the object (amongst other things). Thus, from Newton’s second law, the function satisfies This is a differential equation involving the (as yet unknown) function .   "
},
{
  "id": "introduction-13",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-13",
  "type": "Definition",
  "number": "9.9",
  "title": "",
  "body": " An equation that involves an unknown function, , derivatives of that function and the independent variable is called a differential equation (DE).  The order of a DE is the order of the highest derivative that appears in the equation.  A particular solution for the DE is a function that satisfies the equation.  The general solution of the DE is a description of all possible solutions.  "
},
{
  "id": "introduction-14",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-14",
  "type": "Example",
  "number": "9.10",
  "title": "",
  "body": " What is the order of each the following of the DEs? Using your knowledge of the basic functions of science and engineering try to guess a solution to each DE.           First order differential equation;  First order differential equation;  Second order differential equation;  Second order differential equation;  Second order differential equation;      Because this equation only involves the first derivative of the function it is a first order differential equation. Next, since the differential equation is of the form   we can solve it by simple anti-differentiation. Thus Note that this solution is the general solution to the DE, it is a description of all possible solutions to the equation. As shown in , when we graph all of the functions in this general solution they fill the entire plane but there are no points of intersection.   A solution with a given value of would be a particular solution of the DE, for example This particular solution is highlighted in .   Again this is a first order DE since the highest derivative in the equation is a first derivative. In this case we can't solve the equation via anti-differentiation. However, given that the equation says that the function must be such that its derivative must be equal to the negative of itself it would be reasonable to guess that the function must be an exponential function. For we can see that and so try instead . Then and so we have found a (particular) solution.  This DE contains a second derivative and hence is of order 2. Again we can find a solution by simple anti-differentiation. Since by anti-differentiating we obtain and on anti-differentiating again This is the general solution to the DE. Notice that this 2nd order DE has two arbitrary constants in its general solution.  This DE is also a 2nd order DE but we can't get the solution by anti-differentiation. Thus (at this stage) we have to try to guess. What function is the negative of its second derivative? We could try an exponential function (as we did in part ), i.e. Then which isn't quite what we wanted. Another possible candidate would be the sine or cosine function. So let us now try Then which is what we wanted and so we have found a solution.  This DE contains both the first and second derivative. However since the highest derivative is the second derivative this equation is a 2nd order DE. The most obvious candidate for a solution to this DE would be an exponential function so let's try In this case and and hence . Thus we have found one solution to the DE.    "
},
{
  "id": "introduction-15",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial-value problem "
},
{
  "id": "introduction-16",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-16",
  "type": "Example",
  "number": "9.12",
  "title": "",
  "body": " The differential equation has the general solution . Confirm that this is a solution and then solve the initial-value problem    To confirm that all of the functions are solutions we just need to show that these functions satisfy the equation. Now , and so they are solutions.  To solve the initial-value problem we have to find the value of that ensures that the solution satisfies the initial condition. Now if then . Thus the solution to the initial-value problem is .   "
},
{
  "id": "introduction-17-2",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-17-2",
  "type": "Exercise",
  "number": "9.1.1",
  "title": "",
  "body": " Determine the value (if any) of the constants and such that  is a solution to the DE  "
},
{
  "id": "introduction-17-3",
  "level": "2",
  "url": "Differential_Equations_1.html#introduction-17-3",
  "type": "Exercise",
  "number": "9.1.2",
  "title": "",
  "body": " Guess a solution to the DE .  "
},
{
  "id": "direction-fields-2",
  "level": "2",
  "url": "Differential_Equations_1.html#direction-fields-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction field "
},
{
  "id": "direction-fields-3",
  "level": "2",
  "url": "Differential_Equations_1.html#direction-fields-3",
  "type": "Example",
  "number": "9.13",
  "title": "",
  "body": " Sketch the direction field for the DE Use this direction field to sketch the graph of the solution to the DE satisfying the initial condition .   Rearranging this first order DE in the form gives , i.e. . Now, at the point the slope of the tangent to will be So draw a small segment of the line passing through the point with slope , as shown in .   Repeating for many points in the plane gives the direction field for the DE shown in .   Notice that from this direction field we can see the general shape of the family of solutions to the DE. We can also sketch any particular solution that we want. The particular solution satisfying has been constructed in .   "
},
{
  "id": "direction-fields-4",
  "level": "2",
  "url": "Differential_Equations_1.html#direction-fields-4",
  "type": "Example",
  "number": "9.16",
  "title": "",
  "body": " Sketch the direction field for the DE Describe the long term behaviour of the solutions to this DE.   Note : A first order DE is called autonomous if it is of the form and so this is an example of a first order autonomous DE.   Notice that for this DE the functions are solutions and that for these solutions . (These solutions are called steady state solutions since does not vary along these solutions). Notice also that at any point whose coordinate is greater than , . Similarly for those points with coordinate satisfying , and for those points with coordinate satisfying , . These observations allow us to very quickly make a sketch of the direction field. The direction field for this DE is shown in .  From the direction field we can see that the behaviour of the solution for large values of depends on the initial condition that the solution satisfies. If then as whereas if then as .      "
},
{
  "id": "direction-fields-and-eulers-method-4",
  "level": "2",
  "url": "Differential_Equations_1.html#direction-fields-and-eulers-method-4",
  "type": "Example",
  "number": "9.18",
  "title": "",
  "body": " The Sage cell below can be used to plot the direction field of , as well as a particular solution for some initial point.   "
},
{
  "id": "eulers-method-3",
  "level": "2",
  "url": "Differential_Equations_1.html#eulers-method-3",
  "type": "Definition",
  "number": "9.19",
  "title": "Euler’s Method (for solving the initial-value problem <span class=\"process-math\">\\(y'=f(x,y), \\hspace{5mm} y(x_0)=y_0\\)<\/span>).",
  "body": " Euler's Method (for solving the initial-value problem )   Choose a step size  Begin at the point  Move from one point on the solution to the next point on the solution by:   "
},
{
  "id": "eulers-method-5",
  "level": "2",
  "url": "Differential_Equations_1.html#eulers-method-5",
  "type": "Example",
  "number": "9.20",
  "title": "",
  "body": " Consider the initial-value problem: Estimate using Euler's method with step size         .  .      Here .   Let . Then with we have Thus the Euler estimate is .  Again, begin with . Using we will need two iterations to reach . The first iteration gives Now complete the second iteration Thus the Euler estimate is .  With we will need 4 iterations to reach . We can conveniently summarise the calculations via a table                                               Thus the Euler estimate is    Note that the exact solution to this initial-value problem is and hence (to 4 d.p.). shows how the Euler solution with compares with the exact solution.      "
},
{
  "id": "eulers-method-6",
  "level": "2",
  "url": "Differential_Equations_1.html#eulers-method-6",
  "type": "Example",
  "number": "9.23",
  "title": "",
  "body": " Consider the DE Use Euler's method with to estimate .      Using the table layout:                                                Thus the Euler estimate is    "
},
{
  "id": "eulers-method-7",
  "level": "2",
  "url": "Differential_Equations_1.html#eulers-method-7",
  "type": "Example",
  "number": "9.25",
  "title": "",
  "body": " The Sage cell below can be used to approximate using Euler's method for some step-size and initial point .   "
},
{
  "id": "eulers-method-8-2",
  "level": "2",
  "url": "Differential_Equations_1.html#eulers-method-8-2",
  "type": "Exercise",
  "number": "9.2.2.1",
  "title": "",
  "body": " At time the population density of the Striped Dingbat is modelled by the function . This function satisﬁes the DE where and are positive constants.   Find all steady-state solutions to this DE.  By considering the direction ﬁeld, explain how this model predicts the long-term Striped Dingbat population.   "
},
{
  "id": "eulers-method-8-3",
  "level": "2",
  "url": "Differential_Equations_1.html#eulers-method-8-3",
  "type": "Exercise",
  "number": "9.2.2.2",
  "title": "",
  "body": " The direction field for the DE is shown below. Sketch the solution satisfying the initial condition         "
},
{
  "id": "eulers-method-8-4",
  "level": "2",
  "url": "Differential_Equations_1.html#eulers-method-8-4",
  "type": "Exercise",
  "number": "9.2.2.3",
  "title": "",
  "body": " Consider the initial-value problem Use Euler's method with to estimate .  "
},
{
  "id": "Differential_Equations_2",
  "level": "1",
  "url": "Differential_Equations_2.html",
  "type": "Chapter",
  "number": "10",
  "title": "DE2: First Order Separable DEs",
  "body": "    DE2: First Order Separable DEs       In we discussed the concept of a differential equation and saw how to check if a function is a solution of a given DE. However, except for the case where the DE is of the form (where we can find the solutions just by integration) we have not yet seen any algebraic methods for finding the solutions to a DE. (We did see that for first order DEs we can obtain a graphical representation of the solutions via a direction field and a numerical approximation to a particular solution via Euler's method.)  As mentioned in there is no one general method that will solve all possible DEs. However, for various classes of DEs methods have been found that will find their solution. In this lecture we are going to look at an algebraic method for finding the solutions to the class of DEs called first order separable DEs.        First Order Separable DEs   A differential equation of the form where is called a first order separable DE .    Which of the following DEs are first order separable DEs?           , and     This DE can be written as Thus it is a first order separable DE with and .  This DE is a second order DE (due to the term) and hence cannot be a first order separable DE.  This DE can be rearranged as and hence is a first order separable DE with and .  When we try to rearrange this DE in the same manner as we did in part (c) we obtain This is not of the form and hence this first order DE is not separable.  This DE is already in the form of a first order separable DE with and .  The right hand side of this DE can't be rearranged into the form and so this DE is not a first order separable DE.     The method for solving first order separable DEs is based on integration by substitution. This integration technique was covered in Math1110 but the following example is given as a reminder.   Evaluate the integral .      Since the integrand is of the form (or, in Leibniz notation ) make the substitution Then Using gives     In general, the integration by substitution method says that for an integral of the form the substitution transforms the integral to More succinctly, we can write this as  (As an aside, we saw in Math1110 that this formula follows directly from the chain rule of differentiation.)  Returning now to the problem of solving first order separable DEs, i.e. to solving DEs of the form Assuming that , rearrange the DE as Note that in this step we are \"separating the variables\". Now integrate both sides with respect to to obtain Using the integration by substitution formula on the left hand side gives So long as we can actually perform the integrals on both sides of this equation we will have an equation which will implicitly define (the unknown function) in terms of (the independent variable). If we can further make the subject of this equation then we will have found an explicit formula for the solution to the separable DE.   Find the general solution to the DE       This is a first order separable DE so begin by separating the variables, i.e. Now integrate both sides with respect to , Using the integration by substitution formula this becomes Evaluating the integrals on both sides (and combining the two constants of integration) gives Here we can make the subject of the resulting equation and hence Note that we can check whether this function is a solution to the DE by substituting back into the original DE. On the left hand side, using the chain rule to differentiate we obtain On the right hand side and so does indeed satisfy the DE.  The working so far has assumed that and hence that . Thus to check that we have found all of the solutions to the DE we must check whether the function is also a solution. Clearly it is. Thus the set of all solutions to the DE is See for a sketch of these solutions for various values of .  A sketch of for various values of .     The Sage cell below can be used to plot the direction field of as well as the solution for a given constant of integration .      Find the solution to the initial-value problem       This is a first order separable DE so begin by separating the variables, i.e. Integrating both sides with respect to and applying the integration by substitution formula to the left hand side gives Evaluating the integrals on both sides (and combining the two constants of integration) gives We can't make the subject of this equation and so in this case we can't find an explicit formula for the general solution to the DE. Substituting the initial condition into the implicit equation gives i.e. Thus the solution to the initial-value problem is the relevant function defined implicitly by The curve defined implicitly by this equation is shown in and from this we can see that the \"bottom\" part of the curve will be the function that is the solution to the initial-value problem.     The Sage cell below can be used to plot the direction field of as well as the solution for a given constant of integration .      Find the general solution to the DE  Note : We looked at this example in . There we sketched a direction field for the DE.      This is a first order separable DE with (i.e. it is autonomous) and . On separating the variables and integrating both sides with respect to we obtain To evaluate the integral on the left hand side we have to use partial fraction decomposition, by which we can determine that Thus (Some more detail on partial fraction decomposition can be found in an appendix to this lecture.) So, on evaluating the integral on the right hand side and combining the two constants of integration we obtain This can be rearranged as  shows this curve when superimposed on top of the direction field for the DE. Also shown in the figure are the solutions and which come from checking separately the cases where .     The Sage cell below can be used to plot the direction field of as well as the solution for a given constant of integration .      Find the solution to the initial-value problem  Note : We looked at this example in section where we used Euler’s method with to approximate the value of the solution at .      This is a first order separable DE with and . On separating the variables and integrating both sides with respect to we obtain Evaluating the integrals and rearranging gives To satisfy the initial condition Thus the solution to the initial-value problem is  Note : From this solution The Euler method approximation was  shows both the analytic solution and the Euler approximation over the domain .  Plot of the analytic solution (blue) and Euler approximation (red) for .        Example Tasks   Find the general solution to the DE     Solve the initial-value problem           Some Simple Applications of First Order Separable DEs   Find a curve in the -plane that passes through the point and whose tangent line at any point has its slope given by .      Let the curve be . Then we know i.e. is the solution to an initial-value problem involving a first order separable DE. From the DE, we obtain and hence Using the initial condition gives and hence the required curve is      Suppose that the temperature a cup of coffee when it is poured is . The cup is left to stand in a room where the temperature is . If the temperature of the coffee is after min, how long will it take for the temperature of the coffee in the cup to reach according to Newton’s law of cooling?      Let be the temperature of the cup of coffee at time min after it was poured and let be the room (ambient) temperature. Now, Newton’s law of cooling says that the rate at which the temperature of an object falls is proportional to the difference in the temperature of the object and the temperature of its surroundings. Thus where is the constant of proportionality. This is a first order separable DE and on separating the variables and integrating both sides with respect to we get Evaluating the integrals gives Since , using gives . Using gives and hence Thus, according to Newton's law of cooling the coffee will have cooled to at the value of satisfying from which we find      Consider a L tank which contains pure water. At time salt water begins to flow into the tank at a rate of L\/min and the mixed water flows out of the tank at the same rate. If the concentration of the salt in the inflowing water is g\/L determine the concentration, , of the salt in the tank as a function of time.  Flow of water in and out of a tank.         Let be the amount of salt in the tank (in grams) at time . Then, since there is L of water in the tank Now, since the water in the tank is initially pure, we have the initial condition or equivalently . Finally, the rate at which the amount of salt in the tank is changing is given by the difference of the rate at which the amount of salt is increasing (due to the salt water entering the tank) and the rate at which the amount is decreasing (due to the mixed water flowing out). Since salt water is entering the tank at a rate of L\/min and each litre contains g of salt, the rate at which the amount of salt is increasing is g\/min. Since the mixed water is flowing out of the tank at the rate of L\/min and each litre contains g the rate at which the amount of salt is decreasing is g\/min. Thus From , Putting into , which is a first order separable DE. Separating the variables and integrating both sides with respect gives Evaluating the integrals gives and hence Using the initial condition gives and hence      Example Tasks   An ingot of gold is placed into a furnace which has a temperature of . After min the temperature of the ingot has risen from to . Assuming Newton's Law of Cooling how long before the ingot reaches the melting temperature of ?    Consider a L tank which contains salt water with concentration of g\/L. At time more salt water begins to flow into the tank at the rate of L\/min and the mixed water flows out of the tank at the same rate. Assuming that the concentration of salt in the inflowing water is g\/L how long will it take for the concentration of the water in the tank to reach g\/L?          Partial Fraction Decomposition   Partial fraction decomposition is, essentially, the inverse operation of combining fractions by putting them over a common denominator. More formally, partial fraction decomposition expresses a proper rational function (i.e. a function that is the ratio of two polynomials where the degree of the polynomial in the denominator is greater that the degree of the polynomial in the numerator) as the sum of proper rational functions of lesser degree.   Write as a single fraction.      Using as the common denominator we get     In partial fraction decomposition, for each distinct linear factor in the denominator include a term in the decomposition, where is a value we have to determine.   Find the partial fraction decomposition of .      Because the denominator of this rational function contains two linear polynomial terms the partial fraction decomposition takes the form To determine the values for and multiply both sides of by . This gives For the polynomials on both sides of the equation to be equal they must have the same coefficients and so Solving these simultaneous equations gives and hence     If the denominator of the rational function contains a linear factor to some power, i.e. , then the partial fraction decomposition should contain the terms If the denominator of the rational function contains a quadratic factor, i.e. , then the partial fraction decomposition should contain the term    Find the partial fraction decomposition of .      Because the denominator contains a quadratic term a repeated linear term the partial fraction decomposition takes the form Multiply both sides of by and collect like terms. This gives Equating the coefficients of the polynomials on each side gives Solving these simultaneous equations gives , , , and hence      Example Tasks   Evaluate the integral       "
},
{
  "id": "Sec-First_Order_Separable_DEs-2",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-2",
  "type": "Definition",
  "number": "10.1",
  "title": "",
  "body": " A differential equation of the form where is called a first order separable DE .  "
},
{
  "id": "Sec-First_Order_Separable_DEs-3",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-3",
  "type": "Example",
  "number": "10.2",
  "title": "",
  "body": " Which of the following DEs are first order separable DEs?           , and     This DE can be written as Thus it is a first order separable DE with and .  This DE is a second order DE (due to the term) and hence cannot be a first order separable DE.  This DE can be rearranged as and hence is a first order separable DE with and .  When we try to rearrange this DE in the same manner as we did in part (c) we obtain This is not of the form and hence this first order DE is not separable.  This DE is already in the form of a first order separable DE with and .  The right hand side of this DE can't be rearranged into the form and so this DE is not a first order separable DE.    "
},
{
  "id": "Sec-First_Order_Separable_DEs-5",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-5",
  "type": "Example",
  "number": "10.3",
  "title": "",
  "body": " Evaluate the integral .      Since the integrand is of the form (or, in Leibniz notation ) make the substitution Then Using gives    "
},
{
  "id": "Sec-First_Order_Separable_DEs-8",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-8",
  "type": "Example",
  "number": "10.4",
  "title": "",
  "body": " Find the general solution to the DE       This is a first order separable DE so begin by separating the variables, i.e. Now integrate both sides with respect to , Using the integration by substitution formula this becomes Evaluating the integrals on both sides (and combining the two constants of integration) gives Here we can make the subject of the resulting equation and hence Note that we can check whether this function is a solution to the DE by substituting back into the original DE. On the left hand side, using the chain rule to differentiate we obtain On the right hand side and so does indeed satisfy the DE.  The working so far has assumed that and hence that . Thus to check that we have found all of the solutions to the DE we must check whether the function is also a solution. Clearly it is. Thus the set of all solutions to the DE is See for a sketch of these solutions for various values of .  A sketch of for various values of .     The Sage cell below can be used to plot the direction field of as well as the solution for a given constant of integration .    "
},
{
  "id": "Sec-First_Order_Separable_DEs-9",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-9",
  "type": "Example",
  "number": "10.6",
  "title": "",
  "body": " Find the solution to the initial-value problem       This is a first order separable DE so begin by separating the variables, i.e. Integrating both sides with respect to and applying the integration by substitution formula to the left hand side gives Evaluating the integrals on both sides (and combining the two constants of integration) gives We can't make the subject of this equation and so in this case we can't find an explicit formula for the general solution to the DE. Substituting the initial condition into the implicit equation gives i.e. Thus the solution to the initial-value problem is the relevant function defined implicitly by The curve defined implicitly by this equation is shown in and from this we can see that the \"bottom\" part of the curve will be the function that is the solution to the initial-value problem.     The Sage cell below can be used to plot the direction field of as well as the solution for a given constant of integration .    "
},
{
  "id": "Sec-First_Order_Separable_DEs-10",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-10",
  "type": "Example",
  "number": "10.8",
  "title": "",
  "body": " Find the general solution to the DE  Note : We looked at this example in . There we sketched a direction field for the DE.      This is a first order separable DE with (i.e. it is autonomous) and . On separating the variables and integrating both sides with respect to we obtain To evaluate the integral on the left hand side we have to use partial fraction decomposition, by which we can determine that Thus (Some more detail on partial fraction decomposition can be found in an appendix to this lecture.) So, on evaluating the integral on the right hand side and combining the two constants of integration we obtain This can be rearranged as  shows this curve when superimposed on top of the direction field for the DE. Also shown in the figure are the solutions and which come from checking separately the cases where .     The Sage cell below can be used to plot the direction field of as well as the solution for a given constant of integration .    "
},
{
  "id": "Sec-First_Order_Separable_DEs-11",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-11",
  "type": "Example",
  "number": "10.10",
  "title": "",
  "body": " Find the solution to the initial-value problem  Note : We looked at this example in section where we used Euler’s method with to approximate the value of the solution at .      This is a first order separable DE with and . On separating the variables and integrating both sides with respect to we obtain Evaluating the integrals and rearranging gives To satisfy the initial condition Thus the solution to the initial-value problem is  Note : From this solution The Euler method approximation was  shows both the analytic solution and the Euler approximation over the domain .  Plot of the analytic solution (blue) and Euler approximation (red) for .      "
},
{
  "id": "Sec-First_Order_Separable_DEs-12-2",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-12-2",
  "type": "Exercise",
  "number": "10.1.1",
  "title": "",
  "body": " Find the general solution to the DE   "
},
{
  "id": "Sec-First_Order_Separable_DEs-12-3",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-First_Order_Separable_DEs-12-3",
  "type": "Exercise",
  "number": "10.1.2",
  "title": "",
  "body": " Solve the initial-value problem   "
},
{
  "id": "Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-2",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-2",
  "type": "Example",
  "number": "10.12",
  "title": "",
  "body": " Find a curve in the -plane that passes through the point and whose tangent line at any point has its slope given by .      Let the curve be . Then we know i.e. is the solution to an initial-value problem involving a first order separable DE. From the DE, we obtain and hence Using the initial condition gives and hence the required curve is    "
},
{
  "id": "Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-3",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-3",
  "type": "Example",
  "number": "10.13",
  "title": "",
  "body": " Suppose that the temperature a cup of coffee when it is poured is . The cup is left to stand in a room where the temperature is . If the temperature of the coffee is after min, how long will it take for the temperature of the coffee in the cup to reach according to Newton’s law of cooling?      Let be the temperature of the cup of coffee at time min after it was poured and let be the room (ambient) temperature. Now, Newton’s law of cooling says that the rate at which the temperature of an object falls is proportional to the difference in the temperature of the object and the temperature of its surroundings. Thus where is the constant of proportionality. This is a first order separable DE and on separating the variables and integrating both sides with respect to we get Evaluating the integrals gives Since , using gives . Using gives and hence Thus, according to Newton's law of cooling the coffee will have cooled to at the value of satisfying from which we find    "
},
{
  "id": "Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-4",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-4",
  "type": "Example",
  "number": "10.14",
  "title": "",
  "body": " Consider a L tank which contains pure water. At time salt water begins to flow into the tank at a rate of L\/min and the mixed water flows out of the tank at the same rate. If the concentration of the salt in the inflowing water is g\/L determine the concentration, , of the salt in the tank as a function of time.  Flow of water in and out of a tank.         Let be the amount of salt in the tank (in grams) at time . Then, since there is L of water in the tank Now, since the water in the tank is initially pure, we have the initial condition or equivalently . Finally, the rate at which the amount of salt in the tank is changing is given by the difference of the rate at which the amount of salt is increasing (due to the salt water entering the tank) and the rate at which the amount is decreasing (due to the mixed water flowing out). Since salt water is entering the tank at a rate of L\/min and each litre contains g of salt, the rate at which the amount of salt is increasing is g\/min. Since the mixed water is flowing out of the tank at the rate of L\/min and each litre contains g the rate at which the amount of salt is decreasing is g\/min. Thus From , Putting into , which is a first order separable DE. Separating the variables and integrating both sides with respect gives Evaluating the integrals gives and hence Using the initial condition gives and hence    "
},
{
  "id": "Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-5-2",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-5-2",
  "type": "Exercise",
  "number": "10.2.1",
  "title": "",
  "body": " An ingot of gold is placed into a furnace which has a temperature of . After min the temperature of the ingot has risen from to . Assuming Newton's Law of Cooling how long before the ingot reaches the melting temperature of ?  "
},
{
  "id": "Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-5-3",
  "level": "2",
  "url": "Differential_Equations_2.html#Sec-Some-Simple-Applications-of-First-Order-Separable-DEs-5-3",
  "type": "Exercise",
  "number": "10.2.2",
  "title": "",
  "body": " Consider a L tank which contains salt water with concentration of g\/L. At time more salt water begins to flow into the tank at the rate of L\/min and the mixed water flows out of the tank at the same rate. Assuming that the concentration of salt in the inflowing water is g\/L how long will it take for the concentration of the water in the tank to reach g\/L?  "
},
{
  "id": "Differential_Equations_2-5-2",
  "level": "2",
  "url": "Differential_Equations_2.html#Differential_Equations_2-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Partial fraction decomposition "
},
{
  "id": "Differential_Equations_2-5-3",
  "level": "2",
  "url": "Differential_Equations_2.html#Differential_Equations_2-5-3",
  "type": "Example",
  "number": "10.16",
  "title": "",
  "body": " Write as a single fraction.      Using as the common denominator we get    "
},
{
  "id": "Differential_Equations_2-5-5",
  "level": "2",
  "url": "Differential_Equations_2.html#Differential_Equations_2-5-5",
  "type": "Example",
  "number": "10.17",
  "title": "",
  "body": " Find the partial fraction decomposition of .      Because the denominator of this rational function contains two linear polynomial terms the partial fraction decomposition takes the form To determine the values for and multiply both sides of by . This gives For the polynomials on both sides of the equation to be equal they must have the same coefficients and so Solving these simultaneous equations gives and hence    "
},
{
  "id": "Differential_Equations_2-5-7",
  "level": "2",
  "url": "Differential_Equations_2.html#Differential_Equations_2-5-7",
  "type": "Example",
  "number": "10.18",
  "title": "",
  "body": " Find the partial fraction decomposition of .      Because the denominator contains a quadratic term a repeated linear term the partial fraction decomposition takes the form Multiply both sides of by and collect like terms. This gives Equating the coefficients of the polynomials on each side gives Solving these simultaneous equations gives , , , and hence    "
},
{
  "id": "Differential_Equations_2-5-8-2",
  "level": "2",
  "url": "Differential_Equations_2.html#Differential_Equations_2-5-8-2",
  "type": "Exercise",
  "number": "10.A.1",
  "title": "",
  "body": " Evaluate the integral   "
},
{
  "id": "Differential_Equations_3",
  "level": "1",
  "url": "Differential_Equations_3.html",
  "type": "Chapter",
  "number": "11",
  "title": "DE3: First Order Linear DEs",
  "body": "    DE3: First Order Linear DEs            Exact First Order DEs    Solve the differential equation       This order differential equation is not separable, i.e. it cannot be put into the form . However it is easily solved once we observe that, for a function (and using the product rule) . Using this observation, equation becomes and hence, on integrating both sides with respect to , . Thus the general solution to is .    The DE in is an example of another class of DEs for which we can find a general solution.   Exact First Order DE   A order differential equation of the form is called an exact first order DE.    To solve an exact DE we just need to integrate both sides of the equation with respect to . Sometimes a DE that is not exact can be rearranged so that it is exact.    Rearrange the following DE so that it is exact .       By comparing with we can see that can be made exact by multiplying both sides by .    If a first order DE can be made exact by multiplying both sides by a function , then is called an integrating factor for the DE.    Show that is an integrating factor for the DE .    If is an integrating factor for the DE then multiplying both sides of the equation by will produce an exact DE. Now which is exact.  Note: To solve this DE all we have to do now is integrate both sides with respect to . On doing this we obtain .    Unfortunately, not all first order DEs have an integrating factor. However for an important class of first order DEs, namely first order linear DEs, we can always find an integrating factor. We discuss this class of DEs in the next section.        First Order Linear DEs   Linear First Order DE   A first order DE that can be put into the form is called a linear first order DE .      Which of the following DEs are linear?          and .     Since this DE can be rearranged as it is linear with and . Notice that this DE is also separable since it is of the form . Here and .  We cannot rearrange this DE into the form and hence it is not linear. It is however separable.  Dividing the equation by gives and hence this DE is linear with and . Notice that this DE is also exact since it can be written as . This observation leads to the solution of the DE very efficiently.  This DE is not linear. It also isn't separable nor exact.     As illustrated in (c), we can solve a first order linear DE if it is of the form since in this case the DE is already exact. If the DE is not of this form we proceed by looking for an integrating factor, , for the DE. Remember that multiplying both sides of the DE by an integrating factor makes the equation exact. So, consider the first order linear DE .  Multiplying both sides by the (as yet unknown) function gives . On comparing this to we can see that this will only be exact if , is itself a first order linear DE for the function . However it is also separable and so we can solve it via the separation of variables technique. This gives where here refers to any one of the antiderivatives of . Thus, in theory at least, we can find an entire family of integrating factors for our original DE. It won’t matter which particular integrating factor we use so we usually just take the one with . In summary:   Solving a First Order Linear DE   To solve the first order linear DE   Calculate the integrating factor  Multiply both sides of the DE by the integrating factor  Solve the resulting exact DE       Solve      This first order DE is not separable. If we rearrange the equation as we can see that the equation is linear with and . Thus an integrating factor will be .  Multiplying both sides of the DE by gives and hence .  Using integration by parts gives , and so the general solution is .  Note: As always we can check our answer by substituting back into the original DE.     Solve      This equation is linear with and . Thus an integrating factor will be . Multiplying both sides of the DE by the integrating factor gives , and hence . Using integration by substitution gives . Thus the general solution is . Once again we should check that this is indeed a solution by substituting back into the original DE.     Solve the initial-value problem .      On rearranging the equation as . we see that this DE is linear with and . Thus an integrating factor will be . Multiplying both sides by gives , and hence . Thus the general solution is . Using the initial condition gives and so the solution to the initial-value problem is .     Example Tasks   Solve the first order linear DE .    Solve .    Solve the initial-value problem .    Solve .          Some Simple Applications of First Order Linear DEs   Radioactive Decay   The radioactive isotope thorium disintegrates at a rate proportional to the amount present. If milligrams of this isotope is reduced to milligrams in one week, find:  An expression for the amount present at any time.  The time taken for the amount of isotope to decay to one half of its original value.             Let be the amount (in milligrams) of thorium present at time (in days). Then , where is a positive constant and . The DE is separable but if we write it as , then we see that it is also linear. The integrating factor is . Multiplying both sides by this integrating factor gives , and hence the general solution is . Using gives and from we obtain from which . Thus .  The time when the amount of isotope has decayed to milligrams is the value of that satifies , which is .      Mixing Tank   A L tank contains pure water. At time brackish water (i.e. water containing salt) begins to flow into the tank at a rate of L\/min and mixed water flows out at the same rate. Assuming that the concentration of salt in the inflowing water is g\/L determine the concentration of salt in the water in the tank as a function of time.       Let be the concentration (in g\/L) of the salt in the water in the tank at time minutes after the mixing began and let be the amount (in grams) of salt in the tank at time . Then and .  Now, salt is coming into the tank at the rate , and it is leaving the tank at the rate . Thus will satisfy the DE . Using this becomes which can be written as .  This is a first order linear DE and hence can be solved by multiplying the equation by the integrating factor . In doing this we obtain and hence Thus the general solution is . Using gives and so the required concentration function is . shows a graph of this function. It can be seen that as , . Thus as time goes by the concentration of salt in the tank water approaches the concentration of the salt in the brackish water coming into the tank.   Graph of .       Motion in One Dimension   A ball of mass kg is shot from a cannon meters above the ground straight up with an initial velocity of m\/s. Assuming that the air resistance is given by , where is the velocity, determine the velocity of the ball when it hits the ground.   Note: This is a very simple model for the air resistance chosen mostly to simplify the resultant equations       Let be the velocity of the ball at time seconds after it was fired from the cannon and let the downward direction be the positive direction as shown in .      The motion of the ball will be governed by Newton's second law of motion which says , where is the net force acting on the ball, is its mass and is its acceleration. Once the ball leaves the cannon the forces acting on the ball are gravity, which we will denote by and air resistance, denoted by . Now with the positive direction as shown in , where is the acceleration due to gravity. In the initial phase where the ball is going up the air resistance will be acting against the motion, (i.e. in the positive direction). Thus, since the velocity is negative . In the second phase where the ball is falling the air resistance will again be acting against the motion (i.e. in the negative direction). In this phase the velocity is positive and so once again . Thus the net force acting on the ball is . Since Newton's second law gives or with . This is a first order linear DE in . To solve, multiply both sides of the DE by the integrating factor to get .  Integrating both sides gives and hence, using , and , .  Thus we have determined the velocity function for the ball. To use this to determine the speed of the ball when it hits the ground we must first determine the time at which the ball hits the ground. To do this we will need the displacement function which we can obtain by integrating the velocity function. So, letting be the displacement of the ball at time , we have Using gives and so the displacement function is . Now when . shows a plot of the function and as can be seen there is only one positive solution. Solving this equation numerically (using Newton’s method for example), shows this solution to be .   Graph of .    Thus the velocity of the ball when it hits the ground will be .     Example Tasks   A population of insects in a region will grow at a rate that is proportional to their current population. In the absence of any outside factors the population will triple in two weeks time. On any given day there is a net migration into the area of insects and are eaten by the local bird population and die of natural causes. If there are initially insects in the area will the population survive? If not, when do they die out?    A tank with a capacity of L originally contains L of water with kg of salt in the solution. Water containing kg of salt per litre is entering the tank at a rate of L\/min and the mixture is allowed to flow out of the tank at a rate of L\/min. Find the concentration of salt in the water in the tank at any time before the tank overflows.      "
},
{
  "id": "Ex_1_first_order_de_not_separable",
  "level": "2",
  "url": "Differential_Equations_3.html#Ex_1_first_order_de_not_separable",
  "type": "Example",
  "number": "11.1",
  "title": "",
  "body": "  Solve the differential equation       This order differential equation is not separable, i.e. it cannot be put into the form . However it is easily solved once we observe that, for a function (and using the product rule) . Using this observation, equation becomes and hence, on integrating both sides with respect to , . Thus the general solution to is .   "
},
{
  "id": "Exact_First_Order_DEs-4",
  "level": "2",
  "url": "Differential_Equations_3.html#Exact_First_Order_DEs-4",
  "type": "Definition",
  "number": "11.2",
  "title": "Exact First Order DE.",
  "body": " Exact First Order DE   A order differential equation of the form is called an exact first order DE.   "
},
{
  "id": "Ex_2_exact_firstorderDE",
  "level": "2",
  "url": "Differential_Equations_3.html#Ex_2_exact_firstorderDE",
  "type": "Example",
  "number": "11.3",
  "title": "",
  "body": "  Rearrange the following DE so that it is exact .       By comparing with we can see that can be made exact by multiplying both sides by .   "
},
{
  "id": "Exact_First_Order_DEs-7",
  "level": "2",
  "url": "Differential_Equations_3.html#Exact_First_Order_DEs-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "Ex_3_int_factor",
  "level": "2",
  "url": "Differential_Equations_3.html#Ex_3_int_factor",
  "type": "Example",
  "number": "11.4",
  "title": "",
  "body": "  Show that is an integrating factor for the DE .    If is an integrating factor for the DE then multiplying both sides of the equation by will produce an exact DE. Now which is exact.  Note: To solve this DE all we have to do now is integrate both sides with respect to . On doing this we obtain .   "
},
{
  "id": "First_Order_Linear_DEs-2",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-2",
  "type": "Definition",
  "number": "11.5",
  "title": "Linear First Order DE.",
  "body": " Linear First Order DE   A first order DE that can be put into the form is called a linear first order DE .   "
},
{
  "id": "Which_Are_First_Order_Linear_DEs",
  "level": "2",
  "url": "Differential_Equations_3.html#Which_Are_First_Order_Linear_DEs",
  "type": "Example",
  "number": "11.6",
  "title": "",
  "body": "  Which of the following DEs are linear?          and .     Since this DE can be rearranged as it is linear with and . Notice that this DE is also separable since it is of the form . Here and .  We cannot rearrange this DE into the form and hence it is not linear. It is however separable.  Dividing the equation by gives and hence this DE is linear with and . Notice that this DE is also exact since it can be written as . This observation leads to the solution of the DE very efficiently.  This DE is not linear. It also isn't separable nor exact.    "
},
{
  "id": "First_Order_Linear_DEs-6",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-6",
  "type": "Algorithm",
  "number": "11.7",
  "title": "Solving a First Order Linear DE.",
  "body": " Solving a First Order Linear DE   To solve the first order linear DE   Calculate the integrating factor  Multiply both sides of the DE by the integrating factor  Solve the resulting exact DE     "
},
{
  "id": "First_Order_Linear_DEs-7",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-7",
  "type": "Example",
  "number": "11.8",
  "title": "",
  "body": " Solve      This first order DE is not separable. If we rearrange the equation as we can see that the equation is linear with and . Thus an integrating factor will be .  Multiplying both sides of the DE by gives and hence .  Using integration by parts gives , and so the general solution is .  Note: As always we can check our answer by substituting back into the original DE.   "
},
{
  "id": "First_Order_Linear_DEs-8",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-8",
  "type": "Example",
  "number": "11.9",
  "title": "",
  "body": " Solve      This equation is linear with and . Thus an integrating factor will be . Multiplying both sides of the DE by the integrating factor gives , and hence . Using integration by substitution gives . Thus the general solution is . Once again we should check that this is indeed a solution by substituting back into the original DE.   "
},
{
  "id": "First_Order_Linear_DEs-9",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-9",
  "type": "Example",
  "number": "11.10",
  "title": "",
  "body": " Solve the initial-value problem .      On rearranging the equation as . we see that this DE is linear with and . Thus an integrating factor will be . Multiplying both sides by gives , and hence . Thus the general solution is . Using the initial condition gives and so the solution to the initial-value problem is .   "
},
{
  "id": "First_Order_Linear_DEs-10-2",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-10-2",
  "type": "Exercise",
  "number": "11.2.1",
  "title": "",
  "body": " Solve the first order linear DE .  "
},
{
  "id": "First_Order_Linear_DEs-10-3",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-10-3",
  "type": "Exercise",
  "number": "11.2.2",
  "title": "",
  "body": " Solve .  "
},
{
  "id": "First_Order_Linear_DEs-10-4",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-10-4",
  "type": "Exercise",
  "number": "11.2.3",
  "title": "",
  "body": " Solve the initial-value problem .  "
},
{
  "id": "First_Order_Linear_DEs-10-5",
  "level": "2",
  "url": "Differential_Equations_3.html#First_Order_Linear_DEs-10-5",
  "type": "Exercise",
  "number": "11.2.4",
  "title": "",
  "body": " Solve .  "
},
{
  "id": "Simple_Applications_of_First_Order_Linear_DEs-2",
  "level": "2",
  "url": "Differential_Equations_3.html#Simple_Applications_of_First_Order_Linear_DEs-2",
  "type": "Example",
  "number": "11.11",
  "title": "Radioactive Decay.",
  "body": " Radioactive Decay   The radioactive isotope thorium disintegrates at a rate proportional to the amount present. If milligrams of this isotope is reduced to milligrams in one week, find:  An expression for the amount present at any time.  The time taken for the amount of isotope to decay to one half of its original value.             Let be the amount (in milligrams) of thorium present at time (in days). Then , where is a positive constant and . The DE is separable but if we write it as , then we see that it is also linear. The integrating factor is . Multiplying both sides by this integrating factor gives , and hence the general solution is . Using gives and from we obtain from which . Thus .  The time when the amount of isotope has decayed to milligrams is the value of that satifies , which is .    "
},
{
  "id": "Simple_Applications_of_First_Order_Linear_DEs-3",
  "level": "2",
  "url": "Differential_Equations_3.html#Simple_Applications_of_First_Order_Linear_DEs-3",
  "type": "Example",
  "number": "11.12",
  "title": "Mixing Tank.",
  "body": " Mixing Tank   A L tank contains pure water. At time brackish water (i.e. water containing salt) begins to flow into the tank at a rate of L\/min and mixed water flows out at the same rate. Assuming that the concentration of salt in the inflowing water is g\/L determine the concentration of salt in the water in the tank as a function of time.       Let be the concentration (in g\/L) of the salt in the water in the tank at time minutes after the mixing began and let be the amount (in grams) of salt in the tank at time . Then and .  Now, salt is coming into the tank at the rate , and it is leaving the tank at the rate . Thus will satisfy the DE . Using this becomes which can be written as .  This is a first order linear DE and hence can be solved by multiplying the equation by the integrating factor . In doing this we obtain and hence Thus the general solution is . Using gives and so the required concentration function is . shows a graph of this function. It can be seen that as , . Thus as time goes by the concentration of salt in the tank water approaches the concentration of the salt in the brackish water coming into the tank.   Graph of .     "
},
{
  "id": "Simple_Applications_of_First_Order_Linear_DEs-4",
  "level": "2",
  "url": "Differential_Equations_3.html#Simple_Applications_of_First_Order_Linear_DEs-4",
  "type": "Example",
  "number": "11.14",
  "title": "Motion in One Dimension.",
  "body": " Motion in One Dimension   A ball of mass kg is shot from a cannon meters above the ground straight up with an initial velocity of m\/s. Assuming that the air resistance is given by , where is the velocity, determine the velocity of the ball when it hits the ground.   Note: This is a very simple model for the air resistance chosen mostly to simplify the resultant equations       Let be the velocity of the ball at time seconds after it was fired from the cannon and let the downward direction be the positive direction as shown in .      The motion of the ball will be governed by Newton's second law of motion which says , where is the net force acting on the ball, is its mass and is its acceleration. Once the ball leaves the cannon the forces acting on the ball are gravity, which we will denote by and air resistance, denoted by . Now with the positive direction as shown in , where is the acceleration due to gravity. In the initial phase where the ball is going up the air resistance will be acting against the motion, (i.e. in the positive direction). Thus, since the velocity is negative . In the second phase where the ball is falling the air resistance will again be acting against the motion (i.e. in the negative direction). In this phase the velocity is positive and so once again . Thus the net force acting on the ball is . Since Newton's second law gives or with . This is a first order linear DE in . To solve, multiply both sides of the DE by the integrating factor to get .  Integrating both sides gives and hence, using , and , .  Thus we have determined the velocity function for the ball. To use this to determine the speed of the ball when it hits the ground we must first determine the time at which the ball hits the ground. To do this we will need the displacement function which we can obtain by integrating the velocity function. So, letting be the displacement of the ball at time , we have Using gives and so the displacement function is . Now when . shows a plot of the function and as can be seen there is only one positive solution. Solving this equation numerically (using Newton’s method for example), shows this solution to be .   Graph of .    Thus the velocity of the ball when it hits the ground will be .   "
},
{
  "id": "Simple_Applications_of_First_Order_Linear_DEs-5-2",
  "level": "2",
  "url": "Differential_Equations_3.html#Simple_Applications_of_First_Order_Linear_DEs-5-2",
  "type": "Exercise",
  "number": "11.3.1",
  "title": "",
  "body": " A population of insects in a region will grow at a rate that is proportional to their current population. In the absence of any outside factors the population will triple in two weeks time. On any given day there is a net migration into the area of insects and are eaten by the local bird population and die of natural causes. If there are initially insects in the area will the population survive? If not, when do they die out?  "
},
{
  "id": "Simple_Applications_of_First_Order_Linear_DEs-5-3",
  "level": "2",
  "url": "Differential_Equations_3.html#Simple_Applications_of_First_Order_Linear_DEs-5-3",
  "type": "Exercise",
  "number": "11.3.2",
  "title": "",
  "body": " A tank with a capacity of L originally contains L of water with kg of salt in the solution. Water containing kg of salt per litre is entering the tank at a rate of L\/min and the mixture is allowed to flow out of the tank at a rate of L\/min. Find the concentration of salt in the water in the tank at any time before the tank overflows.  "
},
{
  "id": "Differential_Equations_4",
  "level": "1",
  "url": "Differential_Equations_4.html",
  "type": "Chapter",
  "number": "12",
  "title": "DE4: Homogeneous Second Order Linear DEs",
  "body": "    DE4: Homogeneous Second Order Linear DEs       So far we have learnt how to find exact solutions to separable first order DEs and linear first order DEs. For other types of first order DEs finding exact solutions can become quite involved (or even impossible) and so instead we will turn our attention to second order DEs. Recall that a second order DE is one that involves the second derivative of the unknown function. As with first order DEs we can only find analytic methods for solving second order DEs for certain classes of such DEs.  The class of second order DEs that we are going to consider in this lecture is called the class of “homogeneous, second order, linear DEs with constant coefficients”. Let's try to put this into some sort of context. Recall from that a first order linear DE is a DE of the form:     As we have seen, this equation is called linear because it is the sum of terms that either don't involve or only involve or its derivatives raised to the power of one This is a very rudimentary statement of the concept of linearity . Extending this idea to second order DEs gives the following definition.    A differential equation of the form,   .  where is called a second order linear DE.     In the case where the DE is called homogeneous. Thus:    A differential equation of the form,   .  where is called a homogeneous second order linear DE.     Further, if each of and are constant functions then the DE is said to have constant coefficients. Thus:    A differential equation of the form,   .  where is called a homogeneous second order linear DE with constant coefficients.           Homogeneous Second Order Linear DEs With Constant Coefficients    Guess solutions to the following homogeneous second order linear DEs with constant coefficients.                 What function has its second derivative zero (i.e. has zero curvature)? Clearly any linear function satisfies this property and so we guess that the general solution to this DE is   This DE can be rewritten as The solution, then, is any function that has its second derivative equal to the function itself. This is a property of any of the exponential functions It is also a property of the exponential functions Thus every function of the form will be a solution to the DE.      Before looking at the method for solving a homogeneous second order linear DE with constant coefficients, i.e. a DE of the form   there are several things that we can predict about the solution, (based on and previous lectures):   The general solution will be a family of functions involving two parameters.  The exponential function is a likely candidate for a solution.   Notice also that if both and are solutions to then so will be where and are arbitrary constants. To see this, let and be solutions to , i.e.  Now let Then Substituting into gives:   These observations, along with the following theorem, enable us to develop a method of solution for DEs of the form .    For the homogeneous second order linear DE where given any pair of solutions and that are not constant multiples of each other a general solution to the DE is      Note: The proof of this theorem is beyond the scope of this course.    Given that are all solutions to the DE write down a general solution to this DE.    From the above theorem, since none of these solutions are constant multiples of each other, any pair of them can be combined to form a general solution to the DE. Thus possible general solutions could be and so on.  Recall that a general solution to the DE contains every solution to the DE. For example consider the particular solution This solution belongs to the general solution with It also belongs to the general solution with and to the general solution with     Thus, initially at least, our method for trying to find the solutions to is to try to find two different exponential functions that satisfy the DE and then combine them to obtain a general solution. To this end, let where is some, as yet unspecified, constant. Since for this to be a solution of we have Since for any value of or we conclude that is a solution of when  is called the characteristic equation for a DE of the form of ).  If the characteristic equation ) has two real solutions (i.e. ) then we are done since we will have found two solutions to and, via the given theorem, we can combine these solutions to produce a general solution to . So if the solutions to the characteristic equation are and say, then the general solution to is     Find the general solution to        The characteristic equation for this homogeneous second order linear DE with constant coefficients is which has solutions Thus the general solution to the DE is     If the characteristic equation has only one real solution (i.e. ) then we will have found only one exponential solution to , i.e. To find a general solution we have to find another solution (that is not a constant multiple ). It turns out that another solution to can be found by trying a function of the form Differentiating and substituting into gives Since and  is a solution when Clearly satisfies but this just gives us solution . also satisfies and gives us a solution that is not a constant multiple of . Thus a general solution to will be     Find the general solution to        The characteristic equation for this DE is which has only the one real solution Thus the general solution to the DE is     The final case to consider is that the characteristic equation has complex roots, say Even though we are looking for real solutions, for the moment let us consider the \"complex solutions\" . Using Euler's formula we can write these complex solutions as Adding constant multiples of two solutions gives another solution. Now and which are both real. We can check that functions are indeed solutions to and so we have found two real solutions to that aren’t constant multiples of each other. Thus, in the case that the characteristic equation has complex roots the general solution to the DE is     Find the general solution to        The characteristic equation for this homogeneous second order linear DE with constant coefficients is which has the complex solutions Thus the general solution to the DE is     The above discussion can be summarised as follows.    To solve the homogeneous second order linear DE with constant coefficients    Find the roots of the characteristic equation   If the characteristic equation has two real roots then the general solution to is   If the characteristic equation has a repeated real root then the general solution to is   If the characteristic equation has complex roots then the general solution to is      Given that the general solution to a second order DE has two arbitrary constants in order to find a particular solution it is necessary to give two conditions. In an initial-value problem the conditions given are the values of and at the same value of , usually In a boundary-value problem the conditions given are the values of at two different values of Even when we have a general solution to the DE, it may not always be possible to satisfy a given set of boundary-value conditions.    Solve the initial-value problem         The DE is a homogeneous second order linear DE with constant coefficients. The characteristic equation then is Since this equation has two real solutions,  the general solution is  Thus Using the initial conditions gives the equations. Solving these simultaneously gives Thus the solution to the initial-value problem is This solution is shown in . Note that since the term in the general solution associated with this root (i.e. ) decays as On the other hand since the term in the general solution associated with this root (i.e. ) grows as   Graph of .         Solve the boundary-value problem         The characteristic equation is which has the complex solutions Thus the general solution is Using the boundary conditions gives the equations Thus the solution to the boundary-value problem is This graph of this function is shown in . Note that when the characteristic equation has complex roots, the solutions the homogeneous second order linear DE with constant coefficients will be periodic in nature with frequency . Further, if then the oscillations will grow as whereas if the oscillations will decay as In this case and hence the oscillations increase in amplitude.  Graph of .        Example Tasks   If find the solution to the initial-value problem      Find the solution to the boundary-value problem      Describe the long term behaviour of the solutions to the DE     Use the substitution to solve the DE       "
},
{
  "id": "Differential_Equations_4-2-4",
  "level": "2",
  "url": "Differential_Equations_4.html#Differential_Equations_4-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear "
},
{
  "id": "Differential_Equations_4-2-5",
  "level": "2",
  "url": "Differential_Equations_4.html#Differential_Equations_4-2-5",
  "type": "Definition",
  "number": "12.1",
  "title": "",
  "body": "  A differential equation of the form,   .  where is called a second order linear DE.    "
},
{
  "id": "Differential_Equations_4-2-7",
  "level": "2",
  "url": "Differential_Equations_4.html#Differential_Equations_4-2-7",
  "type": "Definition",
  "number": "12.2",
  "title": "",
  "body": "  A differential equation of the form,   .  where is called a homogeneous second order linear DE.    "
},
{
  "id": "Differential_Equations_4-2-9",
  "level": "2",
  "url": "Differential_Equations_4.html#Differential_Equations_4-2-9",
  "type": "Definition",
  "number": "12.3",
  "title": "",
  "body": "  A differential equation of the form,   .  where is called a homogeneous second order linear DE with constant coefficients.    "
},
{
  "id": "Two_simple_example_homogeneous",
  "level": "2",
  "url": "Differential_Equations_4.html#Two_simple_example_homogeneous",
  "type": "Example",
  "number": "12.4",
  "title": "",
  "body": "  Guess solutions to the following homogeneous second order linear DEs with constant coefficients.                 What function has its second derivative zero (i.e. has zero curvature)? Clearly any linear function satisfies this property and so we guess that the general solution to this DE is   This DE can be rewritten as The solution, then, is any function that has its second derivative equal to the function itself. This is a property of any of the exponential functions It is also a property of the exponential functions Thus every function of the form will be a solution to the DE.     "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-10",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-10",
  "type": "Theorem",
  "number": "12.5",
  "title": "",
  "body": "  For the homogeneous second order linear DE where given any pair of solutions and that are not constant multiples of each other a general solution to the DE is    "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-11",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "example_y_double_derivative_minus_y_complete_solution",
  "level": "2",
  "url": "Differential_Equations_4.html#example_y_double_derivative_minus_y_complete_solution",
  "type": "Example",
  "number": "12.6",
  "title": "",
  "body": "  Given that are all solutions to the DE write down a general solution to this DE.    From the above theorem, since none of these solutions are constant multiples of each other, any pair of them can be combined to form a general solution to the DE. Thus possible general solutions could be and so on.  Recall that a general solution to the DE contains every solution to the DE. For example consider the particular solution This solution belongs to the general solution with It also belongs to the general solution with and to the general solution with    "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-13",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "example_y_double_derivative_plus_3yderivative_2y",
  "level": "2",
  "url": "Differential_Equations_4.html#example_y_double_derivative_plus_3yderivative_2y",
  "type": "Example",
  "number": "12.7",
  "title": "",
  "body": "  Find the general solution to        The characteristic equation for this homogeneous second order linear DE with constant coefficients is which has solutions Thus the general solution to the DE is    "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-17",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-17",
  "type": "Example",
  "number": "12.8",
  "title": "",
  "body": "  Find the general solution to        The characteristic equation for this DE is which has only the one real solution Thus the general solution to the DE is    "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-19",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-19",
  "type": "Example",
  "number": "12.9",
  "title": "",
  "body": "  Find the general solution to        The characteristic equation for this homogeneous second order linear DE with constant coefficients is which has the complex solutions Thus the general solution to the DE is    "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-21",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-21",
  "type": "Theorem",
  "number": "12.10",
  "title": "",
  "body": "  To solve the homogeneous second order linear DE with constant coefficients    Find the roots of the characteristic equation   If the characteristic equation has two real roots then the general solution to is   If the characteristic equation has a repeated real root then the general solution to is   If the characteristic equation has complex roots then the general solution to is     "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-22",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial-value problem boundary-value problem "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-23",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-23",
  "type": "Example",
  "number": "12.11",
  "title": "",
  "body": "  Solve the initial-value problem         The DE is a homogeneous second order linear DE with constant coefficients. The characteristic equation then is Since this equation has two real solutions,  the general solution is  Thus Using the initial conditions gives the equations. Solving these simultaneously gives Thus the solution to the initial-value problem is This solution is shown in . Note that since the term in the general solution associated with this root (i.e. ) decays as On the other hand since the term in the general solution associated with this root (i.e. ) grows as   Graph of .      "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-24",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-24",
  "type": "Example",
  "number": "12.13",
  "title": "",
  "body": "  Solve the boundary-value problem         The characteristic equation is which has the complex solutions Thus the general solution is Using the boundary conditions gives the equations Thus the solution to the boundary-value problem is This graph of this function is shown in . Note that when the characteristic equation has complex roots, the solutions the homogeneous second order linear DE with constant coefficients will be periodic in nature with frequency . Further, if then the oscillations will grow as whereas if the oscillations will decay as In this case and hence the oscillations increase in amplitude.  Graph of .      "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-2",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-2",
  "type": "Exercise",
  "number": "12.1.1",
  "title": "",
  "body": " If find the solution to the initial-value problem    "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-3",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-3",
  "type": "Exercise",
  "number": "12.1.2",
  "title": "",
  "body": " Find the solution to the boundary-value problem    "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-4",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-4",
  "type": "Exercise",
  "number": "12.1.3",
  "title": "",
  "body": " Describe the long term behaviour of the solutions to the DE   "
},
{
  "id": "Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-5",
  "level": "2",
  "url": "Differential_Equations_4.html#Homogeneous_Second_Order_Linear_DEs_With_Constant_Coefficients-25-5",
  "type": "Exercise",
  "number": "12.1.4",
  "title": "",
  "body": " Use the substitution to solve the DE   "
},
{
  "id": "Differential_Equations_5",
  "level": "1",
  "url": "Differential_Equations_5.html",
  "type": "Chapter",
  "number": "13",
  "title": "DE5: Non-Homogeneous Second Order Linear DEs",
  "body": "    DE5: Non-Homogeneous Second Order Linear DEs       Recall that a 2nd order linear DE is a differential equation of the form If the functions , and are all constant functions then the DE is said to have constant coefficients. If then the DE is said to be homogeneous. In the previous lecture (i.e. ) we discussed how to find solutions to a second order linear homogeneous DE with constant coefficients, i.e. to a DE of the form In this lecture we are going to look at solving some non-homogeneous second order linear DEs with constant coefficients, i.e. DEs of the form Some insight into how we might solve such DEs can be gained by revisiting some relevant first order examples.        Non-Homogeneous First Order Linear DEs  Non-homogeneous first order linear DEs with constant coefficients take the form We know that we can solve these DEs via an integrating factor, (see section ).   Find the general solution to the DE       Multiplying both sides of this DE via the integrating factor gives Using integration by parts gives the general solution as There are two interesting facts about this general solution. To discuss these facts write the solution as where The first fact to note is that is the general solution to the homogeneous equation and is one particular solution to the original non-homogeneous DE. The second fact to note is that the form of the particular solution is the same as that of the non-homogeneous term , that is they are both polynomials of degree .     Find the general solution to the DE       Solving via an integrating factor gives the general solution as Once again writing this as where we see that is the general solution to the associated homogeneous DE and that and are both trigonometric functions. In this case it seems reasonable that contains both a term and a since to satisfy the DE we would expect the particular solution to contain terms like and its derivative .     Find the general solution to the DE       The general solution to this DE, found via an integrating factor, is Letting we see that, once again, is the general solution to the associated homogeneous DE but this time is not quite the same form as . The difference in this case from the previous two examples is that here is the same form as , the solution to the homogeneous DE and hence can’t also be of this form.    The above examples all illustrate the following more general result.   The general solution to the non-homogeneous first order linear DE with constant coefficients is where is the general solution to the associated homogeneous DE and is any particular solution to non-homogeneous DE.    Example Tasks   If is the general solution to and is any particular solution to show that is also a solution to           The Method of Undetermined Coefficients  We return now to the problem of finding solutions to non-homogeneous second order linear DEs with constant coefficients, i.e. to DEs of the form Since we don't have any alternative method (such as using an integrating factor) for finding a solution to this class of DE we are forced to use the method suggested by the previous section.   The general solution to the non-homogeneous second order linear DE with constant coefficients is where , the complementary solution , is the general solution to the associated homogeneous DE and is any particular solution to non-homogeneous DE.   It is easy to show that is a solution to the non-homogeneous DE but how do we know that we have found all such solutions, i.e. that we have found the general solution? (After all, is just one particular solution.) Let be any solution to the DE Then the function is a solution to the homogeneous DE since   Now since is the general solution to the homogeneous DE, must be one of the solutions in . Thus must be one of the solutions in , or to put it the other way, contains all solutions to the non-homogeneous DE.  Thus to solve a non-homogeneous second order DE with constant coefficients we have to first find the complementary solution, then find any particular solution and then add these solutions together. We already know how to find the complementary solution (see ) so all that remains is to work out how to find a particular solution, . The method of undetermined coefficients tries to find by guessing that the form that should take is a linear combination of the non-homogeneous term, , and its derivatives.   Find a particular solution to the DE       Here the non-homogeneous term is . This is a 2nd degree polynomial. The first and second derivatives of this will be a linear polynomial and a constant respectively. Thus we guess that a particular solution can found of the form where , and are coefficients to be determined by substituting into the DE. Now, from   Substituting into the DE gives   Thus for to be a solution   Solving these equations gives Thus a particular solution to the DE is     The method of undetermined coefficients is only useful for finding the particular solution when the non-homogeneous term is fairly simple. gives a guide to the form of the particular solution, , to try for various non-homogeneous terms .    Non-Homogenous Term  Form of Particular Solution                      is a linear combination of and its derivatives, i.e.        Find the general solution to       The first step is to find the general solution to the homogeneous DE The characteristic equation for this DE is which has solutions Thus the complementary solution is The next step is to find a particular solution to the non-homogeneous DE. Using the method of undetermined coefficients we try a particular solution of the form where and are the coefficients to be determined. Now   For to be a solution and so, on substituting which simplifies to Equating coefficients on each side of the equation gives   Solving these equations gives and so a particular solution is Combining the particular solution with the complementary solution gives the general solution      Solve the initial-value problem        To solve the initial-value problem we have to begin by finding the general solution to the DE. Since this DE is a non-homogeneous second order DE with constant coefficients we have to first find the general solution to the associated homogeneous DE The characteristic equation for this DE is which has solutions Thus the complementary solution is For the particular solution try a function of the form Then   For this to be a solution and so   On equating coefficients on both sides of this equation Combining the complementary solution and this particular solution gives the general solution as On using the initial condition we find Since on using the initial condition we find Thus and the solution to the initial-value problem is     If the non-homogeneous term is itself a solution to the associated homogeneous DE then the form that we guess for the particular solution has to change. Guided by our experience from non-homogeneous first order constant coefficient DEs (see ) what we try for the particular solution is to multiply the usual form by (or , etc. if necessary) so that no term in the particular solution is itself a solution to the homogeneous DE.   Find the general solution to       The general solution to the associated homogeneous DE, i.e. is the complementary solution to the given DE. Thus We can see here that the non-homogeneous term is a solution to the homogeneous DE (put and into ). Obviously then, trying a particular solution of the form will not work. Thus we try instead a solution of the form For this function, using the product rule and Substituting into the DE gives   Notice that the terms will cancel out and so on equating the coefficients of the terms gives Thus, a particular solution is and hence the general solution is      Solve the initial-value problem        The associated homogeneous DE is Thus the complementary solution is Since the non-homogeneous term is the usual form that we would try for the particular solution would be However this contains a constant term and we can see from the complementary solution (put ) that a constant will satisfy the homogeneous DE. Thus the constant term in the particular solution will not work and we must modify the particular solution. So instead try a particular solution of the form Thus   Substituting into the DE gives   Equating coefficients yields   and hence Thus, a particular solution is and hence the general solution is To solve the initial-value problem we need the derivative of which is Using  Using  Thus and the solution is      Example Tasks   Find the general solution to the DE     Find the general solution to the DE     Solve the initial value problem     Find the general solution to the DE       "
},
{
  "id": "Non-Homogeneous_First_Order_Linear_DEs-3",
  "level": "2",
  "url": "Differential_Equations_5.html#Non-Homogeneous_First_Order_Linear_DEs-3",
  "type": "Example",
  "number": "13.1",
  "title": "",
  "body": " Find the general solution to the DE       Multiplying both sides of this DE via the integrating factor gives Using integration by parts gives the general solution as There are two interesting facts about this general solution. To discuss these facts write the solution as where The first fact to note is that is the general solution to the homogeneous equation and is one particular solution to the original non-homogeneous DE. The second fact to note is that the form of the particular solution is the same as that of the non-homogeneous term , that is they are both polynomials of degree .   "
},
{
  "id": "Non-Homogeneous_First_Order_Linear_DEs-4",
  "level": "2",
  "url": "Differential_Equations_5.html#Non-Homogeneous_First_Order_Linear_DEs-4",
  "type": "Example",
  "number": "13.2",
  "title": "",
  "body": " Find the general solution to the DE       Solving via an integrating factor gives the general solution as Once again writing this as where we see that is the general solution to the associated homogeneous DE and that and are both trigonometric functions. In this case it seems reasonable that contains both a term and a since to satisfy the DE we would expect the particular solution to contain terms like and its derivative .   "
},
{
  "id": "Example_13_1_3",
  "level": "2",
  "url": "Differential_Equations_5.html#Example_13_1_3",
  "type": "Example",
  "number": "13.3",
  "title": "",
  "body": " Find the general solution to the DE       The general solution to this DE, found via an integrating factor, is Letting we see that, once again, is the general solution to the associated homogeneous DE but this time is not quite the same form as . The difference in this case from the previous two examples is that here is the same form as , the solution to the homogeneous DE and hence can’t also be of this form.   "
},
{
  "id": "Non-Homogeneous_First_Order_Linear_DEs-7",
  "level": "2",
  "url": "Differential_Equations_5.html#Non-Homogeneous_First_Order_Linear_DEs-7",
  "type": "Definition",
  "number": "13.4",
  "title": "",
  "body": " The general solution to the non-homogeneous first order linear DE with constant coefficients is where is the general solution to the associated homogeneous DE and is any particular solution to non-homogeneous DE.  "
},
{
  "id": "Non-Homogeneous_First_Order_Linear_DEs-8-2",
  "level": "2",
  "url": "Differential_Equations_5.html#Non-Homogeneous_First_Order_Linear_DEs-8-2",
  "type": "Exercise",
  "number": "13.1.1",
  "title": "",
  "body": " If is the general solution to and is any particular solution to show that is also a solution to   "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-3",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-3",
  "type": "Definition",
  "number": "13.5",
  "title": "",
  "body": " The general solution to the non-homogeneous second order linear DE with constant coefficients is where , the complementary solution , is the general solution to the associated homogeneous DE and is any particular solution to non-homogeneous DE.  "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-7",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of undetermined coefficients "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-8",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-8",
  "type": "Example",
  "number": "13.6",
  "title": "",
  "body": " Find a particular solution to the DE       Here the non-homogeneous term is . This is a 2nd degree polynomial. The first and second derivatives of this will be a linear polynomial and a constant respectively. Thus we guess that a particular solution can found of the form where , and are coefficients to be determined by substituting into the DE. Now, from   Substituting into the DE gives   Thus for to be a solution   Solving these equations gives Thus a particular solution to the DE is    "
},
{
  "id": "DEs_5_table",
  "level": "2",
  "url": "Differential_Equations_5.html#DEs_5_table",
  "type": "Table",
  "number": "13.7",
  "title": "",
  "body": "   Non-Homogenous Term  Form of Particular Solution                      is a linear combination of and its derivatives, i.e.     "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-10",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-10",
  "type": "Example",
  "number": "13.8",
  "title": "",
  "body": " Find the general solution to       The first step is to find the general solution to the homogeneous DE The characteristic equation for this DE is which has solutions Thus the complementary solution is The next step is to find a particular solution to the non-homogeneous DE. Using the method of undetermined coefficients we try a particular solution of the form where and are the coefficients to be determined. Now   For to be a solution and so, on substituting which simplifies to Equating coefficients on each side of the equation gives   Solving these equations gives and so a particular solution is Combining the particular solution with the complementary solution gives the general solution    "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-11",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-11",
  "type": "Example",
  "number": "13.9",
  "title": "",
  "body": " Solve the initial-value problem        To solve the initial-value problem we have to begin by finding the general solution to the DE. Since this DE is a non-homogeneous second order DE with constant coefficients we have to first find the general solution to the associated homogeneous DE The characteristic equation for this DE is which has solutions Thus the complementary solution is For the particular solution try a function of the form Then   For this to be a solution and so   On equating coefficients on both sides of this equation Combining the complementary solution and this particular solution gives the general solution as On using the initial condition we find Since on using the initial condition we find Thus and the solution to the initial-value problem is    "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-13",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-13",
  "type": "Example",
  "number": "13.10",
  "title": "",
  "body": " Find the general solution to       The general solution to the associated homogeneous DE, i.e. is the complementary solution to the given DE. Thus We can see here that the non-homogeneous term is a solution to the homogeneous DE (put and into ). Obviously then, trying a particular solution of the form will not work. Thus we try instead a solution of the form For this function, using the product rule and Substituting into the DE gives   Notice that the terms will cancel out and so on equating the coefficients of the terms gives Thus, a particular solution is and hence the general solution is    "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-14",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-14",
  "type": "Example",
  "number": "13.11",
  "title": "",
  "body": " Solve the initial-value problem        The associated homogeneous DE is Thus the complementary solution is Since the non-homogeneous term is the usual form that we would try for the particular solution would be However this contains a constant term and we can see from the complementary solution (put ) that a constant will satisfy the homogeneous DE. Thus the constant term in the particular solution will not work and we must modify the particular solution. So instead try a particular solution of the form Thus   Substituting into the DE gives   Equating coefficients yields   and hence Thus, a particular solution is and hence the general solution is To solve the initial-value problem we need the derivative of which is Using  Using  Thus and the solution is    "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-15-2",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-15-2",
  "type": "Exercise",
  "number": "13.2.1",
  "title": "",
  "body": " Find the general solution to the DE   "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-15-3",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-15-3",
  "type": "Exercise",
  "number": "13.2.2",
  "title": "",
  "body": " Find the general solution to the DE   "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-15-4",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-15-4",
  "type": "Exercise",
  "number": "13.2.3",
  "title": "",
  "body": " Solve the initial value problem   "
},
{
  "id": "The_Method_of_Undetermined_Coefficients-15-5",
  "level": "2",
  "url": "Differential_Equations_5.html#The_Method_of_Undetermined_Coefficients-15-5",
  "type": "Exercise",
  "number": "13.2.4",
  "title": "",
  "body": " Find the general solution to the DE   "
},
{
  "id": "Differential_Equations_6",
  "level": "1",
  "url": "Differential_Equations_6.html",
  "type": "Chapter",
  "number": "14",
  "title": "DE6: An Application of Second Order Linear DEs with Constant Coefficients",
  "body": "    DE6: An Application of Second Order Linear DEs with Constant Coefficients       Recall that for a function a 2nd order linear DE with constant coefficients is a DE of the form In previous lectures (i.e. and ) we discussed how to find solutions to DEs of this form (for various possibilities of at least). In this lecture we are going to discuss an application of this type of DE to modelling the vibrations of springs.        A Simple Model  In this section we are going to model the motion of an object attached to the free end of a spring which has its other end fixed as shown in . To construct this model set up an axis with its origin at the centre of the object when the object-spring system is in equilibrium and with the positive direction going upward. With respect to this axis assume that without the object attached the end of the spring is at . Now, imagine that the object is pulled down units (with respect to the axis) and then let go.  Representation of an object-spring system.   Our models for the motion of the object will be based Hooke's Law and Newton's second law of motion.   Hooke's Law  If a spring is stretched (compressed) units beyond its natural position then it pulls (pushes) with a force, , of magnitude where the value of depends on the properties of the spring itself.   Common terminology is to call the force the restoring force and the constant the spring constant .   Newton's Second Law of Motion  The acceleration, , of an object as produced by a net force, , is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass, , of the object, i.e. .   So, now consider the forces acting on the object at any time after the object has been pulled down and released. In our initial model we will assume that there are just two forces acting on the object as shown in : firstly the force due to gravity, , and secondly the restoring force, , due to the spring.  Forces in an object-spring system.   With the axis as set up in (or ), will always act in the negative direction. However, will be positive when the displacement of the object is less than and negative when the displacement of the object is greater than (i.e. the restoring force always acts in the direction of the natural position of the spring). Notice that since the motion of the object is one dimensional we can represent the relevant vector quantities by real numbers. The sign of the number will give us the direction of the vector.  Thus, the force due to gravity is constant and is given by where is the mass of the object and is the acceleration due to gravity. (This follows from Newton's Universal Law of Gravitation and Newton's second law of motion.). If represents the displacement of (the centre of) the object then from Hooke's Law where is the spring constant. Notice that the negative sign is needed in this relationship to make the restoring force act in the correct direction. Thus the net force acting on the object is Now if we let be the acceleration of the object, then from Newton’s second law of motion   Thus we are able to model the displacement of the object via a 2nd order linear DE with constant coefficients, along with the initial conditions We can further simplify the DE by noting that when the object-spring system is in equilibrium the net force is zero and hence Using this, the model simplifies to which is an initial-value problem involving a homogeneous 2nd order linear DE with constant coefficients.  Using the methods outlined in we find that the general solution to is where is called the natural frequency of the system. (Note that should probably be called the \"natural angular frequency\" since the frequency of is .) The derivative of is and hence from the initial conditions we find that and . Thus the solution to the initial-value problem is As shown in , this solution is telling us that (under the assumptions of the model) the motion of the object will be periodic about the equilibrium position i.e. will be simple harmonic motion.  Plot of .   Of course real springs do not oscillate forever and so we conclude that our model must have ignored some important details (e.g. air resistance, frictional forces etc.) Despite this obvious shortcoming we will use this simple model as the basis for looking at more complicated contexts.        Adding Damping  Imagine now that some sort of damping mechanism is added to the object-spring system as shown in . (Such a system might be used as a simple model of a car shock absorber for example.)  Representation of an object-spring system with a damping mechanism.   So long as the speed of the object is not too fast then a reasonable assumption is that the damping force acting on the object, , is proportional to the speed and acts in the direction opposing the motion of the object. Thus where . Thus the motion of the object can be modelled by the DE which can be rearranged as i.e. a homogeneous 2nd order linear DE with constant coefficients. It is convenient in the subsequent algebra to let and so the model becomes The characteristic equation for is which gives Thus the nature of the general solution to depends upon the sign of , or equivalently, on the magnitude of the parameter . is called the damping parameter of the system.  If (or equivalently ) then the general solution is where and hence the function will be like that shown in . In this case the system is called under-damped .  Plot of under-damped solution .     If (or equivalently ) then the general solution is where both and are negative and hence the function will be like that shown in . In this case the system is called over-damped .  Plot of over-damped solution .   Finally if (or equivalently ) then the general solution is and hence the function will be like that shown in . In this case the system is called critically-damped .  Plot of critically-damped solution .   The critically-damped case is of practical interest. Often we want to add damping to a system so that it returns close to its equilibrium position \"as quickly as possible\", (for example in the shock absorber of a car). It turns out that this is achieved by critical damping.   Consider the second-order linear homogeneous differential equation which has the damping parameter The Sage cell below considers the case where kg and (i.e. ) and plots the solution for various .          Adding an External Force  In our final model we will look at the situation where some other external force, , is also acting on the object along the -axis, as shown in . This context has many applications, especially in engineering, although in most applications the context doesn't actually look like the diagram shown in . For example if the top of a power pole is pulled to one side and let go it will behave like an object-spring system with damping. Now when a wind blows past the pole it is possible that aerodynamic effects can result in an oscillating side force acting on the pole.  Representation of object-spring system with a damping mechanism and an external force.   Assume that the external force is oscillatory and hence can be represented by Then the net force acting on the object will be and hence the motion of the object can be modelled by the DE Following the same steps as in the previous section we can, therefore, write our model as So now the DE is a non-homogeneous 2nd order linear DE with constant coefficients. The general solution is constructed from the complementary solution and a particular solution. We know the complementary solution from our previous model. From that model we know that the complementary solution always tends to as . Thus the long term behaviour of this system is determined by the particular solution to . From we know that a particular solution will be of the form Substituting into and equating coefficients gives Since it is easier to interpret we will write as a single trigonometric function. Thus let Using some standard trigonometric identities it can be shown that Thus From this we can conclude that the long term response of our damped object-spring system to forcing by an external force is to oscillate at the forcing angular frequency, , and with an amplitude that is the amplitude of the external force multiplied by the factor Notice that, since for a given object-spring system and are fixed values, this factor is a function of the forcing angular frequency .   Run the Sage cell below to plot the graphs of for various values of (which relates to the damping coefficient) when (which relates to the stiffness coefficient) is held constant at . In fact, it can be shown that if the damping parameter ( ) is small then has a maximum when the forcing frequency is near the natural frequency of the system and further that this maximum tends to infinity as .   The significance of this analysis is the insight that if our damped object-spring system is subjected to an external oscillatory force near the natural frequency of the system it will respond with large amplitude motion unless the system is sufficiently damped. This phenomenon is known as resonance .  Using the Sage cell below, you can play with a damped oscillator with applied external force . (Note: here is actually the solution to the IVP with the right hand side set to zero, and is not the same as the particular solution guessed earlier.)    Example Tasks   Determine the values of and in the DE that give the damped object-spring system a damping parameter of and a natural frequency of .    A beam that is fixed rigidly at one end and designed to support a load at the other end is called a cantilever . If the cantilever is designed only to deflect a \"small\" amount under its load then it is reasonable to assume that the size of the deflection of the tip of the cantilever is proportional to the load applied. When such a cantilever is deflected beyond (or less than) its equilibrium position the cantilever exerts a restoring force toward the equilibrium position. So long as the deflection is reasonably small and the mass of the object is large compared to the mass of the cantilever this restoring force is proportional to the deflection. Show that the resulting motion of the tip of the cantilever can be modelled under these assumptions via a homogeneous 2nd order linear DE.  A cantilever.       Show that if then       "
},
{
  "id": "DE_6_Figure_1",
  "level": "2",
  "url": "Differential_Equations_6.html#DE_6_Figure_1",
  "type": "Figure",
  "number": "14.1",
  "title": "",
  "body": " Representation of an object-spring system.   "
},
{
  "id": "A_Simple_Model-3",
  "level": "2",
  "url": "Differential_Equations_6.html#A_Simple_Model-3",
  "type": "Definition",
  "number": "14.2",
  "title": "Hooke’s Law.",
  "body": " Hooke's Law  If a spring is stretched (compressed) units beyond its natural position then it pulls (pushes) with a force, , of magnitude where the value of depends on the properties of the spring itself.  "
},
{
  "id": "A_Simple_Model-4",
  "level": "2",
  "url": "Differential_Equations_6.html#A_Simple_Model-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "restoring force spring constant "
},
{
  "id": "A_Simple_Model-5",
  "level": "2",
  "url": "Differential_Equations_6.html#A_Simple_Model-5",
  "type": "Definition",
  "number": "14.3",
  "title": "Newton’s Second Law of Motion.",
  "body": " Newton's Second Law of Motion  The acceleration, , of an object as produced by a net force, , is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass, , of the object, i.e. .  "
},
{
  "id": "DE_6_Figure_2",
  "level": "2",
  "url": "Differential_Equations_6.html#DE_6_Figure_2",
  "type": "Figure",
  "number": "14.4",
  "title": "",
  "body": " Forces in an object-spring system.   "
},
{
  "id": "A_Simple_Model-10",
  "level": "2",
  "url": "Differential_Equations_6.html#A_Simple_Model-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural frequency "
},
{
  "id": "Adding_Damping-2",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_Damping-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "damping parameter "
},
{
  "id": "Adding_Damping-3",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_Damping-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "under-damped "
},
{
  "id": "Adding_Damping-4",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_Damping-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "over-damped critically-damped "
},
{
  "id": "Adding_Damping-5",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_Damping-5",
  "type": "Example",
  "number": "14.10",
  "title": "",
  "body": " Consider the second-order linear homogeneous differential equation which has the damping parameter The Sage cell below considers the case where kg and (i.e. ) and plots the solution for various .   "
},
{
  "id": "Fig_14_3_1",
  "level": "2",
  "url": "Differential_Equations_6.html#Fig_14_3_1",
  "type": "Figure",
  "number": "14.11",
  "title": "",
  "body": " Representation of object-spring system with a damping mechanism and an external force.   "
},
{
  "id": "Adding_an_External_Force-5",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_an_External_Force-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resonance "
},
{
  "id": "Adding_an_External_Force-8-2",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_an_External_Force-8-2",
  "type": "Exercise",
  "number": "14.3.1",
  "title": "",
  "body": " Determine the values of and in the DE that give the damped object-spring system a damping parameter of and a natural frequency of .  "
},
{
  "id": "Adding_an_External_Force-8-3",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_an_External_Force-8-3",
  "type": "Exercise",
  "number": "14.3.2",
  "title": "",
  "body": " A beam that is fixed rigidly at one end and designed to support a load at the other end is called a cantilever . If the cantilever is designed only to deflect a \"small\" amount under its load then it is reasonable to assume that the size of the deflection of the tip of the cantilever is proportional to the load applied. When such a cantilever is deflected beyond (or less than) its equilibrium position the cantilever exerts a restoring force toward the equilibrium position. So long as the deflection is reasonably small and the mass of the object is large compared to the mass of the cantilever this restoring force is proportional to the deflection. Show that the resulting motion of the tip of the cantilever can be modelled under these assumptions via a homogeneous 2nd order linear DE.  A cantilever.     "
},
{
  "id": "Adding_an_External_Force-8-4",
  "level": "2",
  "url": "Differential_Equations_6.html#Adding_an_External_Force-8-4",
  "type": "Exercise",
  "number": "14.3.3",
  "title": "",
  "body": " Show that if then   "
},
{
  "id": "Linear_Algebra_1",
  "level": "1",
  "url": "Linear_Algebra_1.html",
  "type": "Chapter",
  "number": "15",
  "title": "LA1: Systems of Linear Equations",
  "body": "    LA1: Systems of Linear Equations            Introduction  An equation such as (where the and are numbers and the are variables) is a linear equation in variables, (or unknowns). In the special case in which the equation is called homogeneous . (Of course when there are only a small number of variables, or say, it is common to use completely different labels (such as , and ) for the variables rather than to use subscripts (such as , and ).)   A system of linear equations is a set of simultaneous linear equations in variables, i.e.    A solution to a system of linear equations is a set of values for the variables that satisfy all of the equations in the system. The solution set to the system is the set of all possible solutions.   The following is a homogeneous system of three linear equations in four unknowns.   A solution to this system of equations is , , , which can be written as The solution set for this system is the set of points    You should already be familiar with solving systems of linear equations involving two equations in two variables and interpreting the solution in terms of lines in the plane.   Solve the following system of linear equations and interpret the answer geometrically    We can interpret the solution as the point in the plane at which the straight lines represented by the equations and intersect.    Multiplying the second equation by and then subtracting this from the first equation gives . Substituting this result into either of the original equations gives . Thus the solution is .  As shown in , we can interpret the solution as the point in the plane at which the straight lines represented by the equations and intersect.  Plots of (blue) and (red).        Solve the following system of linear equations and interpret the answer geometrically    The solution set is . The geometric interpretation of this system of linear equations is that both equations represent the same line.    Multiplying the first equation by and then subtracting this from the second equation gives . This tells us that any values of and that satisfy the first equation will also satisfy the second equation. Thus there are infinitely many solutions. We may choose (say) to be anything we like, and then find a corresponding value for (from either equation). So if we set , then and the solution set is Thus, the parameter labels the infinite family of solutions.  The geometric interpretation of this system of linear equations is that both equations represent the same line (as shown in ).  Plots of (blue) and (red).   Note that the solution written in terms of the parameter can be interpreted as a vector equation for the line. By writing the solution as we can see that the line passes through the point and is parallel to the vector .     Solve the following system of linear equations and interpret the answer geometrically    There are no solutions. Geometrically, this system of linear equations can be interpreted as two parallel lines in the plane.    Multiplying the first equation by and then subtracting this from the second equation gives . This tells us that no values of and will satisfy these equations. Thus there are no solutions. A system of equations with no solution is said to be inconsistent .  Geometrically, this system of linear equations can be interpreted as two parallel lines in the plane, as shown in .  Plots of (blue) and (red).       The above (simple) examples illustrate two important facts that hold for all systems of linear equations. Firstly:   A system of linear equations in unknowns has either   A unique solution,  An infinite number of solutions, or  No solution    Thus it is impossible, for example, for a system of linear equations to have exactly two or exactly three solutions. (We will see why this is later.) Secondly, we cannot tell which of these cases (i.e. a unique solution, infinitely many solutions or no solution) applies simply by counting the number of equations and unknowns.  For systems of two linear equations in two unknowns we have seen that we can solve the system via the \"substitution method\" (viz. making one variable the subject of one equation and then substituting this into the second equation) or the \"elimination method\" (viz. adding a multiple of one equation to other). For larger system of equations this basic idea can still be used but the working can be become quite messy. In the following sections we will look at a systematic way of solving a system of linear equations in unknowns using matrices.        Matrices and Systems of Linear Equations   An  matrix is a rectangular array of numbers with rows and columns, i.e.   We say that the number is the th entry (i.e. the entry in row , column ).    The following are examples of matrices.     Matrices have proved useful in many areas of mathematics and we will study them in more detail throughout this strand. With respect to the following system of linear equations   so long as the variables are always written in the same order and the constants are always put on to the right hand side we can represent this system via the matrix This matrix is called the augmented matrix for the system of linear equations. Each row of this matrix corresponds to an equation in the system. Each of the first columns corresponds to the coefficients of a variable in the equations and the last column gives the constants on the right hand sides of the equations.   Write down the augmented matrix for the following non-homogenous system of linear equations    The augmented matrix will be the matrix     Note that sometimes a partition line is put before the last column in an augmented matrix to emphasise that the last column represents the right hand side of the equations while the remaining columns represent the coefficients of the variables in the system. The matrix without the last column is called the coefficient matrix for the system of equations.   ( cont.)  For this system of linear equations the augmented matrix is sometimes written as The coefficient matrix for this system is     Write down the system of linear equations that correspond to the following augmented matrices.            Calling the variables as , and the system of equations is   Again calling the variables , and this augmented matrix represents the very simple system of equations            Solving Systems of Linear Equations  Two systems of linear equations are said to be equivalent if they have the same number of variables and have the same solution sets.   ( cont.)  It turns out that the systems of linear equations in are equivalent, i.e. The solution to these equivalent systems can be seen from the system on the right whereas they are not at all obvious from the system on the left.   Notice that, given a system of linear equations, we can produce an equivalent system by doing any one of the following:   Multiplying any one equation by a non-zero constant  Re-writing the equations in a different order  Adding any multiple of one equation to another    The following systems of linear equations are equivalent because we have just written the equations in a different order. The following systems of linear equations are equivalent because we have just multiplied the second equation by . The following systems of linear equations are equivalent because we have just subtracted the first equation from the second equation, (i.e. added times the first equation to the second equation.)    Thus the strategy for solving a system of linear equations will be to apply the above operations in a systematic way to produce an equivalent system from which we can determine the solution (such as that given in ). This strategy, in the form described below, is called Gauss-Jordon Elimination . In order to describe this strategy we need some terminology.   Given a matrix an equivalent matrix can be produced by applying any one of the following three elementary row operations :   Swapping two rows  Multiplying a row by a non-zero constant  Adding a multiple of one row to another row     Note:    We use the symbol to denote that two matrices are equivalent.  The process of applying elementary row operations to a matrix is called row reduction    ( cont.)  The following matrices are equivalent because we have just swapped two rows. The following matrices are equivalent because we have just multiplied Row by . The following matrices are equivalent because we have just subtracted Row from Row , (i.e. added times Row to Row )     A matrix is said to be in row-echelon form if the first non-zero entry (i.e. the leading entry) in each row occurs further to the right than in the row above it.  A matrix is said to be in reduced row-echelon form if it is in row-echelon form and each leading entry is 1 with no non-zero entries above it.    For the following matrices decide if it is row-echelon form, reduced row-echelon form or neither. For those matrices in reduced row-echelon form what can you say about the system of linear equations represented by those matrices?                  This matrix is in reduced row-echelon form. The system of equations represented by this matrix is The third equation in this system is satisfied no matter what values we choose for , and . Once we choose a value for (say) then from the first two equations we can determine the values for and as Thus this system of equations has an infinite number of solutions given by or   This matrix isn't in row-echelon form (and hence not in reduced row-echelon form either) since the leading entry in row occurs to the left of the leading entry is row .  This matrix is in row-echelon form but not reduced row-echelon form. Notice that in this case we can tell that the associated system of linear equations is inconsistent even though the matrix is not in reduced row-echelon form. The fourth equation in this system is and this cannot be satisfied no matter which values of , and we choose.  This matrix is in reduced row-echelon form and the solution of the associated systems of linear equations is       In Gauss-Jordon Elimination , the augmented matrix associated with the system of linear equations is systematically row reduced to reduced row-echelon form by:   Obtaining a 1 in entry  Obtaining 's in the remainder of column by using the elementary row operation of adding multiples of row to another row.  Obtaining a 1 in entry  Obtaining 's in the remainder of column by using the elementary row operation of adding multiples of row to another row.  And so on across the columns.   The solution is then read off from the equivalent system represented by the matrix in reduced row-echelon form    Use Gauss Jordon Elimination to solve the following system of linear equations:    The augmented matrix for this system is We now want to row reduce this matrix to reduced row-echelon form. Following the steps as outlined: We can now read off the solution as Of course we can check that this solution is correct by substituting these values into the original equations.  In doing the row reduction here were had to use fractions. It is possible to apply the elementary row operations in a manner that avoids the fractions until the last steps. However you have to be very careful in doing this that you don’t lose some of the ’s that you have already created and hence start going around in circles!     Use Gauss Jordon Elimination to solve the following system of linear equations.    The augmented matrix for this system is Now using the steps as outlined to reduce this to reduced row-echelon form: Thus the solution is        Example Tasks   For the following augmented matrices write down the general solution of the associated system of linear equations, (i.e. write down the set of all solutions).                  Solve the following system of linear equations by Gauss-Jordan elimination.     The general equation of a circle is . Find the equation of the circle that passes through the points , and .      "
},
{
  "id": "Sec-LA_Introduction-2",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear equation homogeneous "
},
{
  "id": "Sec-LA_Introduction-3",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-3",
  "type": "Definition",
  "number": "15.1",
  "title": "",
  "body": " A system of linear equations is a set of simultaneous linear equations in variables, i.e.   "
},
{
  "id": "Sec-LA_Introduction-4",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution solution set "
},
{
  "id": "Sec-LA_Introduction-5",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-5",
  "type": "Example",
  "number": "15.2",
  "title": "",
  "body": " The following is a homogeneous system of three linear equations in four unknowns.   A solution to this system of equations is , , , which can be written as The solution set for this system is the set of points   "
},
{
  "id": "Sec-LA_Introduction-7",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-7",
  "type": "Example",
  "number": "15.3",
  "title": "",
  "body": " Solve the following system of linear equations and interpret the answer geometrically    We can interpret the solution as the point in the plane at which the straight lines represented by the equations and intersect.    Multiplying the second equation by and then subtracting this from the first equation gives . Substituting this result into either of the original equations gives . Thus the solution is .  As shown in , we can interpret the solution as the point in the plane at which the straight lines represented by the equations and intersect.  Plots of (blue) and (red).      "
},
{
  "id": "Sec-LA_Introduction-8",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-8",
  "type": "Example",
  "number": "15.5",
  "title": "",
  "body": " Solve the following system of linear equations and interpret the answer geometrically    The solution set is . The geometric interpretation of this system of linear equations is that both equations represent the same line.    Multiplying the first equation by and then subtracting this from the second equation gives . This tells us that any values of and that satisfy the first equation will also satisfy the second equation. Thus there are infinitely many solutions. We may choose (say) to be anything we like, and then find a corresponding value for (from either equation). So if we set , then and the solution set is Thus, the parameter labels the infinite family of solutions.  The geometric interpretation of this system of linear equations is that both equations represent the same line (as shown in ).  Plots of (blue) and (red).   Note that the solution written in terms of the parameter can be interpreted as a vector equation for the line. By writing the solution as we can see that the line passes through the point and is parallel to the vector .   "
},
{
  "id": "Sec-LA_Introduction-9",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-9",
  "type": "Example",
  "number": "15.7",
  "title": "",
  "body": " Solve the following system of linear equations and interpret the answer geometrically    There are no solutions. Geometrically, this system of linear equations can be interpreted as two parallel lines in the plane.    Multiplying the first equation by and then subtracting this from the second equation gives . This tells us that no values of and will satisfy these equations. Thus there are no solutions. A system of equations with no solution is said to be inconsistent .  Geometrically, this system of linear equations can be interpreted as two parallel lines in the plane, as shown in .  Plots of (blue) and (red).      "
},
{
  "id": "Sec-LA_Introduction-11",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Introduction-11",
  "type": "Definition",
  "number": "15.9",
  "title": "",
  "body": " A system of linear equations in unknowns has either   A unique solution,  An infinite number of solutions, or  No solution   "
},
{
  "id": "Sec-LA_Matrices_and_Systems_of_Linear_Equations-2",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Matrices_and_Systems_of_Linear_Equations-2",
  "type": "Definition",
  "number": "15.10",
  "title": "",
  "body": " An  matrix is a rectangular array of numbers with rows and columns, i.e.   We say that the number is the th entry (i.e. the entry in row , column ).  "
},
{
  "id": "Sec-LA_Matrices_and_Systems_of_Linear_Equations-3",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Matrices_and_Systems_of_Linear_Equations-3",
  "type": "Example",
  "number": "15.11",
  "title": "",
  "body": " The following are examples of matrices.    "
},
{
  "id": "Sec-LA_Matrices_and_Systems_of_Linear_Equations-6",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Matrices_and_Systems_of_Linear_Equations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "Ex_15_2_4",
  "level": "2",
  "url": "Linear_Algebra_1.html#Ex_15_2_4",
  "type": "Example",
  "number": "15.12",
  "title": "",
  "body": " Write down the augmented matrix for the following non-homogenous system of linear equations    The augmented matrix will be the matrix    "
},
{
  "id": "Sec-LA_Matrices_and_Systems_of_Linear_Equations-8",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Matrices_and_Systems_of_Linear_Equations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix "
},
{
  "id": "Sec-LA_Matrices_and_Systems_of_Linear_Equations-9",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Matrices_and_Systems_of_Linear_Equations-9",
  "type": "Example",
  "number": "15.13",
  "title": "(Example 15.12 cont.).",
  "body": " ( cont.)  For this system of linear equations the augmented matrix is sometimes written as The coefficient matrix for this system is   "
},
{
  "id": "Ex-Write_down_the_system_of_equations",
  "level": "2",
  "url": "Linear_Algebra_1.html#Ex-Write_down_the_system_of_equations",
  "type": "Example",
  "number": "15.14",
  "title": "",
  "body": " Write down the system of linear equations that correspond to the following augmented matrices.            Calling the variables as , and the system of equations is   Again calling the variables , and this augmented matrix represents the very simple system of equations     "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-2",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-3",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-3",
  "type": "Example",
  "number": "15.15",
  "title": "(Example 15.14 cont.).",
  "body": " ( cont.)  It turns out that the systems of linear equations in are equivalent, i.e. The solution to these equivalent systems can be seen from the system on the right whereas they are not at all obvious from the system on the left.  "
},
{
  "id": "Ex-Equivalent_systems_of_linear_equations",
  "level": "2",
  "url": "Linear_Algebra_1.html#Ex-Equivalent_systems_of_linear_equations",
  "type": "Example",
  "number": "15.16",
  "title": "",
  "body": " The following systems of linear equations are equivalent because we have just written the equations in a different order. The following systems of linear equations are equivalent because we have just multiplied the second equation by . The following systems of linear equations are equivalent because we have just subtracted the first equation from the second equation, (i.e. added times the first equation to the second equation.)   "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-7",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss-Jordon Elimination "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-8",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-8",
  "type": "Definition",
  "number": "15.17",
  "title": "",
  "body": " Given a matrix an equivalent matrix can be produced by applying any one of the following three elementary row operations :   Swapping two rows  Multiplying a row by a non-zero constant  Adding a multiple of one row to another row   "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-9",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-10",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row reduction "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-11",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-11",
  "type": "Example",
  "number": "15.18",
  "title": "(Example 15.16 cont.).",
  "body": " ( cont.)  The following matrices are equivalent because we have just swapped two rows. The following matrices are equivalent because we have just multiplied Row by . The following matrices are equivalent because we have just subtracted Row from Row , (i.e. added times Row to Row )   "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-12",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-12",
  "type": "Definition",
  "number": "15.19",
  "title": "",
  "body": " A matrix is said to be in row-echelon form if the first non-zero entry (i.e. the leading entry) in each row occurs further to the right than in the row above it.  A matrix is said to be in reduced row-echelon form if it is in row-echelon form and each leading entry is 1 with no non-zero entries above it.  "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-13",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-13",
  "type": "Example",
  "number": "15.20",
  "title": "",
  "body": " For the following matrices decide if it is row-echelon form, reduced row-echelon form or neither. For those matrices in reduced row-echelon form what can you say about the system of linear equations represented by those matrices?                  This matrix is in reduced row-echelon form. The system of equations represented by this matrix is The third equation in this system is satisfied no matter what values we choose for , and . Once we choose a value for (say) then from the first two equations we can determine the values for and as Thus this system of equations has an infinite number of solutions given by or   This matrix isn't in row-echelon form (and hence not in reduced row-echelon form either) since the leading entry in row occurs to the left of the leading entry is row .  This matrix is in row-echelon form but not reduced row-echelon form. Notice that in this case we can tell that the associated system of linear equations is inconsistent even though the matrix is not in reduced row-echelon form. The fourth equation in this system is and this cannot be satisfied no matter which values of , and we choose.  This matrix is in reduced row-echelon form and the solution of the associated systems of linear equations is     "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-14",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-14",
  "type": "Definition",
  "number": "15.21",
  "title": "",
  "body": " In Gauss-Jordon Elimination , the augmented matrix associated with the system of linear equations is systematically row reduced to reduced row-echelon form by:   Obtaining a 1 in entry  Obtaining 's in the remainder of column by using the elementary row operation of adding multiples of row to another row.  Obtaining a 1 in entry  Obtaining 's in the remainder of column by using the elementary row operation of adding multiples of row to another row.  And so on across the columns.   The solution is then read off from the equivalent system represented by the matrix in reduced row-echelon form  "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-15",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-15",
  "type": "Example",
  "number": "15.22",
  "title": "",
  "body": " Use Gauss Jordon Elimination to solve the following system of linear equations:    The augmented matrix for this system is We now want to row reduce this matrix to reduced row-echelon form. Following the steps as outlined: We can now read off the solution as Of course we can check that this solution is correct by substituting these values into the original equations.  In doing the row reduction here were had to use fractions. It is possible to apply the elementary row operations in a manner that avoids the fractions until the last steps. However you have to be very careful in doing this that you don’t lose some of the ’s that you have already created and hence start going around in circles!   "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-16",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-16",
  "type": "Example",
  "number": "15.23",
  "title": "",
  "body": " Use Gauss Jordon Elimination to solve the following system of linear equations.    The augmented matrix for this system is Now using the steps as outlined to reduce this to reduced row-echelon form: Thus the solution is    "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-17-2",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-17-2",
  "type": "Exercise",
  "number": "15.3.1",
  "title": "",
  "body": " For the following augmented matrices write down the general solution of the associated system of linear equations, (i.e. write down the set of all solutions).                "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-17-3",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-17-3",
  "type": "Exercise",
  "number": "15.3.2",
  "title": "",
  "body": " Solve the following system of linear equations by Gauss-Jordan elimination.   "
},
{
  "id": "Sec-LA_Solving_Systems_of_Linear_Equations-17-4",
  "level": "2",
  "url": "Linear_Algebra_1.html#Sec-LA_Solving_Systems_of_Linear_Equations-17-4",
  "type": "Exercise",
  "number": "15.3.3",
  "title": "",
  "body": " The general equation of a circle is . Find the equation of the circle that passes through the points , and .  "
},
{
  "id": "Linear_Algebra__2",
  "level": "1",
  "url": "Linear_Algebra__2.html",
  "type": "Chapter",
  "number": "16",
  "title": "LA2: Geometric Interpretations of Linear Equations",
  "body": "    LA2: Geometric Interpretations of Linear Equations            Interpretation Via Rows  We know that a linear equation in two variables can be interpreted as the equation of a line in the plane. For example the equation can be interpreted as a line of slope and with a -intercept of . Thus, for a system of linear equations involving two variables each row can be interpreted as a line in the plane and finding the solution to this system can be thought of as finding all of those points in the plane (if any) that lie on all of the lines. (We had several examples last week where we interpreted systems involving just two linear equations this way.)   Solve the following system of linear equations and interpret the result geometrically.    Forming the augmented matrix and row reducing it to reduced row-echelon form gives We can see from the reduced row-echelon form that this system of equations is inconsistent. The geometric interpretation of this is that there is no point in the plane that lies on all three lines, as can be seen in .  Plots of (blue), (red) and (green).       For systems of linear equations involving three unknowns each equation (or alternatively each row in the augmented matrix) can be thought of as representing a plane in , i.e. in three dimensions. Recall that the Cartesian equation of the plane that is normal to the vector and passes through the point is i.e. a linear equation in three variables. Thus the solution to a system of linear equations in variables can be interpreted as those points in (if any) that lie on all of the planes in the system.   Solve the following system of linear equations and interpret your answer geometrically (in terms of the rows).    Forming the augmented matrix and row reducing it to reduced row-echelon form gives From the reduced row-echelon form we can see that the solution set is The geometric interpretation of this solution, as shown in , is that the planes intersect in the line with vector equation i.e. the line passing through the point and parallel to the vector   Intersection of planes.       A linear equation in more than variables (where ) is said to represent an -dimensional hyperplane . The geometric interpretation (in terms of rows) of the solution to a system of linear equations involving such equations would be the set of -dimensional points that lie on all of the hyperplanes. Obviously drawing pictures for such systems is not possible.   Example Tasks   What would you expect the reduced row-echelon form of the augmented matrix associated with the system of equations for lines in space meeting a point to look like.    Solve the following system of linear equations and interpret your answer geometrically (in terms of the rows).     What form would you expect the reduced row-echelon form of the augmented matrix associated with the system of equations for distinct parallel planes to take.          Interpretation Via Columns  Consider (initially at least) a system of two linear equations in two unknowns and  which can be represented by the augmented matrix To give a geometric interpretation of this system of equations (in terms of the columns) we are going to think of the matrix as representing the vector in (i.e. in the plane) whose tail is at the origin and whose head is at the point . Thus this matrix is sometimes called a column vector .   The vector represented by is sketched in .  Sketch of the vector .      Now, the system of linear equations given above can be written as or, if we let , and as Remember that when written in this form, the sign means vector addition and , for example, means the scalar multiplication of the vector by the scalar . So solving this system of linear equations can be interpreted as finding scalars and such that the vector can be written in terms of the vectors and .   Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus the solution is . Geometrically we can interpret this solution as saying the vector can be written in terms of the vectors and via the expression See . Note that the solution is also saying that there is only one way in which can be written in terms of and .  Sum of vectors       Before going on to consider systems of linear equations involving (or more) variables it is convenient to introduce some new terminology.   The vector , where , is said to be a linear combination of the vectors .  The set of all linear combinations of the set of vectors is said to be the span of that set of vectors.    ( cont.)  The geometric interpretation (in terms of the columns) of the system of linear equations can be now be phrased as:  The vector can be written as a linear combination of the vectors and , and in only one way, or  The vector is in the span of the vectors and .      Describe the span of the set of vectors .   The span of the set is the set of vectors of the form where and are scalars. From what we learnt about vectors in Math1110 we know that any vector in the plane will be able to be written as linear combination of these two vectors and hence the span of will be all vectors in . Alternatively, we could approach this problem algebraically. Let be a vector in the span of . Then Using Gauss Jordon elimination gives and so the solution is . Thus, no matter which vector, , in we choose we can find the scalars so that is a linear combination of and and hence in the span of .     Describe the span of the set of vectors .   Firstly note that the vectors in this set are -dimensional vectors and hence the vectors in the span will also be -dimensional. Now, the span of the set is the set of vectors of the form We recognise this as the vector equation of the plane through the origin and with direction vectors and , as shown in .  3D plot of the plane given by with normal vector shown in blue.   Recall that the normal to this plane (shown in blue in ) is given by and so here (using the column vector notation) is Thus the Cartesian equation of this plane is      The set of vectors is called linearly independent if no vector in the set can be written as a linear combination of the other vectors in the set, or equivalently if the only solution to homogeneous system of linear equations is .  A set of vectors that is not linearly independent is called linearly dependent .    Decide if the following sets of vectors are linearly independent or not.         This set of vectors is linearly dependent since (from our previous examples) we know that i.e. can be written as a linear combination of and .  This set of vectors is linearly independent since the only solution to is . Note that in this case this is telling us that is not a scalar multiple of , i.e. is not parallel to .      We are now ready to discuss the geometric interpretation, in terms of the columns, of a system of three linear equations in three unknowns , and , i.e. of This system of three linear equations can be written as or, if we let , , and as Thus, solving this system of linear equations can be interpreted as finding scalars , and such that the vector can be written as a linear combination of the vectors , (or equivalently, that is in the span of ).   Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus the solution is . The geometric interpretation of this solution is that the vector (shown in blue in ) can be written as a linear combination of the vectors (shown in red in ) and in only one way, (shown in green in ).       Note that if the system of linear equations is homogeneous (i.e. ) then the solution of the system tells us if the set of vectors is linearly independent or not.   Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus the solution is . The geometric interpretatifon of this solution is that the column vectors of the coefficient matrix are linearly independent, i.e. that no one of those vectors can be written in terms of the other two. If the column vectors had turned out to be linearly dependent then we could have written, for example, This would imply that lies in the plane defined by the vectors and , or to say the same thing, that , and are coplanar. Since the vectors are linearly independent we can say these vectors are not coplanar. See .        Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus this system has an infinite number of solutions given by To discuss the geometric interpretation of this solution let Then we can say that can be written as a linear combination of the vectors in an infinite number of ways. Notice that with we have Since can written as a linear combination of , the vectors , and are coplanar. Similarly (with ) we can see that , and are coplanar. So, in fact, , , and are all coplanar.  Finally we can see from the above working that the vectors are linearly dependent since if then the reduced row-echelon form would be     To summarise what we have we have covered:   Consider the system of linear equations whose augmented matrix is The following statements are equivalent:  The system has a unique solution  The planes represented by the rows intersect in a point  The column vectors of the coefficient matrix are linearly independent      Example Tasks   Decide if the following sets of vectors are linearly independent or not        Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.       Show that the set of vectors are linearly dependent.  Find values of , and such that the following system of linear equations has infinitely many solutions         "
},
{
  "id": "Interpretation_Via_Rows-3",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Rows-3",
  "type": "Example",
  "number": "16.1",
  "title": "",
  "body": " Solve the following system of linear equations and interpret the result geometrically.    Forming the augmented matrix and row reducing it to reduced row-echelon form gives We can see from the reduced row-echelon form that this system of equations is inconsistent. The geometric interpretation of this is that there is no point in the plane that lies on all three lines, as can be seen in .  Plots of (blue), (red) and (green).      "
},
{
  "id": "Interpretation_Via_Rows-5",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Rows-5",
  "type": "Example",
  "number": "16.3",
  "title": "",
  "body": " Solve the following system of linear equations and interpret your answer geometrically (in terms of the rows).    Forming the augmented matrix and row reducing it to reduced row-echelon form gives From the reduced row-echelon form we can see that the solution set is The geometric interpretation of this solution, as shown in , is that the planes intersect in the line with vector equation i.e. the line passing through the point and parallel to the vector   Intersection of planes.      "
},
{
  "id": "Interpretation_Via_Rows-7-2",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Rows-7-2",
  "type": "Exercise",
  "number": "16.1.1",
  "title": "",
  "body": " What would you expect the reduced row-echelon form of the augmented matrix associated with the system of equations for lines in space meeting a point to look like.  "
},
{
  "id": "Interpretation_Via_Rows-7-3",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Rows-7-3",
  "type": "Exercise",
  "number": "16.1.2",
  "title": "",
  "body": " Solve the following system of linear equations and interpret your answer geometrically (in terms of the rows).   "
},
{
  "id": "Interpretation_Via_Rows-7-4",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Rows-7-4",
  "type": "Exercise",
  "number": "16.1.3",
  "title": "",
  "body": " What form would you expect the reduced row-echelon form of the augmented matrix associated with the system of equations for distinct parallel planes to take.  "
},
{
  "id": "Interpretation_Via_Columns-2",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column vector "
},
{
  "id": "Interpretation_Via_Columns-3",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-3",
  "type": "Example",
  "number": "16.5",
  "title": "",
  "body": " The vector represented by is sketched in .  Sketch of the vector .     "
},
{
  "id": "Ex_16_2_5",
  "level": "2",
  "url": "Linear_Algebra__2.html#Ex_16_2_5",
  "type": "Example",
  "number": "16.7",
  "title": "",
  "body": " Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus the solution is . Geometrically we can interpret this solution as saying the vector can be written in terms of the vectors and via the expression See . Note that the solution is also saying that there is only one way in which can be written in terms of and .  Sum of vectors      "
},
{
  "id": "Interpretation_Via_Columns-7",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-7",
  "type": "Definition",
  "number": "16.9",
  "title": "",
  "body": " The vector , where , is said to be a linear combination of the vectors .  The set of all linear combinations of the set of vectors is said to be the span of that set of vectors.  "
},
{
  "id": "Interpretation_Via_Columns-8",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-8",
  "type": "Example",
  "number": "16.10",
  "title": "(Example 16.7 cont.).",
  "body": " ( cont.)  The geometric interpretation (in terms of the columns) of the system of linear equations can be now be phrased as:  The vector can be written as a linear combination of the vectors and , and in only one way, or  The vector is in the span of the vectors and .    "
},
{
  "id": "Interpretation_Via_Columns-9",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-9",
  "type": "Example",
  "number": "16.11",
  "title": "",
  "body": " Describe the span of the set of vectors .   The span of the set is the set of vectors of the form where and are scalars. From what we learnt about vectors in Math1110 we know that any vector in the plane will be able to be written as linear combination of these two vectors and hence the span of will be all vectors in . Alternatively, we could approach this problem algebraically. Let be a vector in the span of . Then Using Gauss Jordon elimination gives and so the solution is . Thus, no matter which vector, , in we choose we can find the scalars so that is a linear combination of and and hence in the span of .   "
},
{
  "id": "Interpretation_Via_Columns-10",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-10",
  "type": "Example",
  "number": "16.12",
  "title": "",
  "body": " Describe the span of the set of vectors .   Firstly note that the vectors in this set are -dimensional vectors and hence the vectors in the span will also be -dimensional. Now, the span of the set is the set of vectors of the form We recognise this as the vector equation of the plane through the origin and with direction vectors and , as shown in .  3D plot of the plane given by with normal vector shown in blue.   Recall that the normal to this plane (shown in blue in ) is given by and so here (using the column vector notation) is Thus the Cartesian equation of this plane is    "
},
{
  "id": "Interpretation_Via_Columns-11",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-11",
  "type": "Definition",
  "number": "16.14",
  "title": "",
  "body": " The set of vectors is called linearly independent if no vector in the set can be written as a linear combination of the other vectors in the set, or equivalently if the only solution to homogeneous system of linear equations is .  A set of vectors that is not linearly independent is called linearly dependent .  "
},
{
  "id": "Interpretation_Via_Columns-12",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-12",
  "type": "Example",
  "number": "16.15",
  "title": "",
  "body": " Decide if the following sets of vectors are linearly independent or not.         This set of vectors is linearly dependent since (from our previous examples) we know that i.e. can be written as a linear combination of and .  This set of vectors is linearly independent since the only solution to is . Note that in this case this is telling us that is not a scalar multiple of , i.e. is not parallel to .     "
},
{
  "id": "Interpretation_Via_Columns-14",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-14",
  "type": "Example",
  "number": "16.16",
  "title": "",
  "body": " Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus the solution is . The geometric interpretation of this solution is that the vector (shown in blue in ) can be written as a linear combination of the vectors (shown in red in ) and in only one way, (shown in green in ).      "
},
{
  "id": "Interpretation_Via_Columns-16",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-16",
  "type": "Example",
  "number": "16.18",
  "title": "",
  "body": " Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus the solution is . The geometric interpretatifon of this solution is that the column vectors of the coefficient matrix are linearly independent, i.e. that no one of those vectors can be written in terms of the other two. If the column vectors had turned out to be linearly dependent then we could have written, for example, This would imply that lies in the plane defined by the vectors and , or to say the same thing, that , and are coplanar. Since the vectors are linearly independent we can say these vectors are not coplanar. See .      "
},
{
  "id": "Interpretation_Via_Columns-17",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-17",
  "type": "Example",
  "number": "16.20",
  "title": "",
  "body": " Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.    The augmented matrix and its reduced row-echelon equivalent matrix are Thus this system has an infinite number of solutions given by To discuss the geometric interpretation of this solution let Then we can say that can be written as a linear combination of the vectors in an infinite number of ways. Notice that with we have Since can written as a linear combination of , the vectors , and are coplanar. Similarly (with ) we can see that , and are coplanar. So, in fact, , , and are all coplanar.  Finally we can see from the above working that the vectors are linearly dependent since if then the reduced row-echelon form would be    "
},
{
  "id": "Interpretation_Via_Columns-19",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-19",
  "type": "Definition",
  "number": "16.21",
  "title": "",
  "body": " Consider the system of linear equations whose augmented matrix is The following statements are equivalent:  The system has a unique solution  The planes represented by the rows intersect in a point  The column vectors of the coefficient matrix are linearly independent    "
},
{
  "id": "Interpretation_Via_Columns-20-2",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-20-2",
  "type": "Exercise",
  "number": "16.2.1",
  "title": "",
  "body": " Decide if the following sets of vectors are linearly independent or not      "
},
{
  "id": "Interpretation_Via_Columns-20-3",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-20-3",
  "type": "Exercise",
  "number": "16.2.2",
  "title": "",
  "body": " Solve the following system of linear equations and interpret your answer geometrically in terms of the columns of the augmented matrix.   "
},
{
  "id": "Interpretation_Via_Columns-20-4",
  "level": "2",
  "url": "Linear_Algebra__2.html#Interpretation_Via_Columns-20-4",
  "type": "Exercise",
  "number": "16.2.3",
  "title": "",
  "body": "   Show that the set of vectors are linearly dependent.  Find values of , and such that the following system of linear equations has infinitely many solutions     "
},
{
  "id": "Chap-Linear_Algebra_3",
  "level": "1",
  "url": "Chap-Linear_Algebra_3.html",
  "type": "Chapter",
  "number": "17",
  "title": "LA3: Matrix Algebra",
  "body": "    LA3: Matrix Algebra       We introduced matrices when discussing systems of linear equations. Recall that an matrix is a rectangular array of numbers, written in the form which is sometimes written in the abbreviated form   Note that we usually use a capital letter to denote a matrix.  In the context of systems of linear equations the main concept was row reducing a matrix to produce equivalent matrices. In different contexts, however, other operations on matrices have proved useful and we shall discuss these operations below. Before doing this, though, we will introduce some new terminology.   Two matrices are said to be equal if they are of the same size and all corresponding entries are equal.     Let   For what values of and does ?  For what values of and does ?        and  None.       Since and are of the same size, the matrices will be equal when and .  Since and are not the same size they can never be equal.      The zero matrix is the matrix with all entries , i.e.    Note that by using the symbol to denote the zero matrix we have to tell from the context whether the refers to a number or a matrix.   For the matrix , its transpose , denoted by , is defined by .   Note that this definition is saying that the rows of matrix are the columns of its transpose and vice versa.    Let For what values of and does ?      Since , when and .    A square matrix is a matrix that has the same number of rows and columns.     Matrix is a square matrix whereas matrix is not.      The identity matrix , , is the matrix with rows and columns with all entries on the main diagonal equal to and all other entries , i.e.    Often, when the size of the identity matrix is clear the subscript is dropped from the notation and the identity matrix is denoted just by .        Addition and Scalar Multiplication   Matrix addition and scalar multiplication  Let and be matrices, i.e., and . Then  Matrix addition is defined by .  Scalar multiplication is defined by where is a constant.     Thus, to add two matrices of the same size, add up the corresponding entries in each matrix. Matrix addition of matrices not of the same size is not defined. To multiply a matrix by a scalar, multiply each entry in the matrix by that scalar. Note that we now can also subtract two matrices by defining    If Then calculate the given expression or explain why it does not exist.   (i.e. the entry in row , column of the matrix )        Since is a matrix so will be . Since and are not the same size we cannot add these two matrices.   and so . Thus and   . Since this is a matrix there is no entry in row , column .     From the definitions of matrix addition and scalar multiplication the following general properties can be shown.   Properties of Scalar Multiplication and Matrix Addition   Let , and be matrices of the same size. Then  (A1)  (Commutative Law)  (A2)  (Associative Law)  (A3)  (Identity Law)  (A4)  (Inverse Law)  (S1)    (S2)    (S3)    (S4)         Example Tasks   Let   Find .  Find .      Show that for any matrix , . For what values of is it true that ?    Prove that for two matrices and of the same size .         Matrix Multiplication   Let and . Then matrix multiplication is defined by    If we call then from this definition it can be seen:  For the matrix multiplication to be defined the number of columns in has to be equal to the number of rows in . The resulting matrix, , has the same number of rows as and the same number of columns as .  Entry in is found by taking the scalar (or dot) product of the row vector from with (the transpose of) the column vector from , i.e.      Let   Calculate .  Calculate .       is not defined.       Since is a matrix and is then is defined since has columns and has rows. The resultant matrix will be a matrix since has rows and has columns. Thus will be of the form Now and so     is not defined because the number of columns in (i.e. 2) is not equal to the number of rows in (i.e. 3).    Notice that this example shows that matrix multiplication is not commutative, i.e. in general     Let   Calculate .  Calculate .                      Notice that this example is an illustration that matrix multiplication is associative, i.e. in general .    From the definition of matrix multiplication the following properties can be shown to hold.   Properties of Matrix Multiplication   Let , and be appropriately sized matrices. Then  (Associative Law)  (Left Distributive Law)  (Right Distributive Law)   if is an matrix (Identity Law)      For later reference, some properties of the transpose of a matrix with respect to the various matrix operations that we have been discussing are listed below.   Properties of Matrix Transpose   Let and be appropriately sized matrices. Then          where .        Confirm that holds for the matrices    Firstly Next      Example Tasks   Let   Calculate .  Calculate .      Let   Calculate .  Calculate .           Matrices and Systems of Linear Equations  Consider the following system of linear equations   Now that we have introduced matrix multiplication we can write this system as where is the coefficient matrix  is the matrix (i.e. the column vector of the variables) and is the (i.e. the column vector of the constants)     The system of linear equations can be written as     We can now use the properties of matrix multiplication to establish some interesting facts about the solutions to systems of linear equations. For example:    Consider the non-homogenous system of linear equations and the corresponding homogeneous system   If has two distinct solutions then it has an infinite number of solutions.  If has a unique solution then has only the trivial solution .  If has an infinite number of solution then so does .        Let and be two distinct solutions to and let . By using the properties of matrix multiplication we can see that So, any vector of the form , , will be a solution to since , i.e. has an infinite number of solutions.  Let be the unique solution to and let be a non-zero solution to . Then and so is another solution to , which is not possible. Thus there cannot be any non-zero solutions to .  Since has an infinite number of solutions let and be two distinct solutions to . Now let and . Then , i.e. there are an infinite number of solutions to .      Note that these arguments are general and hold for any system of linear equations in variables. Note also that if the system consists of linear equations in variables then result above can be stated as:    Consider the system of linear equations whose augmented matrix is The following statements are equivalent:  The system has a unique solution.  The planes represented by the rows intersect in a point.  The column vectors of the coefficient matrix are linearly independent.       Example Tasks   Consider the following system of linear equations:   Calculate where .  Show that is a solution to the system of equations.  Write down all solutions to the system of equations.           Linear Transformations  There are many applications of matrices where we view the matrix as a transformation (or mapping) that takes one vector and transforms (or maps) it to another vector. So, if is an matrix then can be thought of as a transformation that takes the vector to the vector .    Consider the matrix Since is a matrix, we can think of as a transformation that takes each vector in the plane to another vector in the plane, . Under this transformation, for example, goes to and goes to See       In fact, is the matrix for the transformation that we would describe as a reflection in the line . To see this, let the vector be transformed to the vector under this reflection. Then we know that which we can write via matrices as   Run the Sage cell below to see the effect of the transformation matrix on some input (a sketch of a house).       It can be shown that a rotation (in the plane) about the origin through angle can be represented by the matrix  For example the matrix for a rotation about the origin through (or ) is  Run the Sage cell below to see the effect of the rotation matrix on some input (a sketch of a house).       Determine the matrix for the transformation in which a reflection in the line is followed by a rotation about the origin through .       Let and Then, under the given transformation the vector will be mapped to the vector where so the required matrix can be found via matrix multiplication, i.e.,   Note that given that the matrix for a reflection in the line is we can see that the matrix represents a reflection in the line .    Transformations that can be represented via a matrix are called linear transformations . When the matrix is a matrix the transformation is called a linear transformation of the plane.   Linear transformations in 3 dimensions are also possible. The Sage cell below plots the effect of a linear transformation on three unit vectors and the parallelepiped spanned by them.     Example Tasks   Which vectors are mapped to under the transformation whose matrix is .    Find the matrix for the transformation of the plane in which a rotation about the origin through is followed by a reflection in the line .    Find the vector to which is mapped by followed by followed by      "
},
{
  "id": "Chap-Linear_Algebra_3-2-4",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Chap-Linear_Algebra_3-2-4",
  "type": "Definition",
  "number": "17.1",
  "title": "",
  "body": " Two matrices are said to be equal if they are of the same size and all corresponding entries are equal.  "
},
{
  "id": "Ex-Matrix_equality",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Matrix_equality",
  "type": "Example",
  "number": "17.2",
  "title": "",
  "body": "  Let   For what values of and does ?  For what values of and does ?        and  None.       Since and are of the same size, the matrices will be equal when and .  Since and are not the same size they can never be equal.    "
},
{
  "id": "Chap-Linear_Algebra_3-2-6",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Chap-Linear_Algebra_3-2-6",
  "type": "Definition",
  "number": "17.3",
  "title": "",
  "body": " The zero matrix is the matrix with all entries , i.e.   "
},
{
  "id": "Chap-Linear_Algebra_3-2-8",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Chap-Linear_Algebra_3-2-8",
  "type": "Definition",
  "number": "17.4",
  "title": "",
  "body": " For the matrix , its transpose , denoted by , is defined by .  "
},
{
  "id": "Ex-Transpose",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Transpose",
  "type": "Example",
  "number": "17.5",
  "title": "",
  "body": "  Let For what values of and does ?      Since , when and .  "
},
{
  "id": "Chap-Linear_Algebra_3-2-11",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Chap-Linear_Algebra_3-2-11",
  "type": "Definition",
  "number": "17.6",
  "title": "",
  "body": " A square matrix is a matrix that has the same number of rows and columns.  "
},
{
  "id": "Ex-Square_matrices",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Square_matrices",
  "type": "Example",
  "number": "17.7",
  "title": "",
  "body": "  Matrix is a square matrix whereas matrix is not.    "
},
{
  "id": "Chap-Linear_Algebra_3-2-13",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Chap-Linear_Algebra_3-2-13",
  "type": "Definition",
  "number": "17.8",
  "title": "",
  "body": " The identity matrix , , is the matrix with rows and columns with all entries on the main diagonal equal to and all other entries , i.e.   "
},
{
  "id": "Sec-Addition_and_Scalar_Multiplication-2",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Addition_and_Scalar_Multiplication-2",
  "type": "Definition",
  "number": "17.9",
  "title": "Matrix addition and scalar multiplication.",
  "body": " Matrix addition and scalar multiplication  Let and be matrices, i.e., and . Then  Matrix addition is defined by .  Scalar multiplication is defined by where is a constant.    "
},
{
  "id": "Ex-Matrix_addition_and_scalar_multiplication",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Matrix_addition_and_scalar_multiplication",
  "type": "Example",
  "number": "17.10",
  "title": "",
  "body": "  If Then calculate the given expression or explain why it does not exist.   (i.e. the entry in row , column of the matrix )        Since is a matrix so will be . Since and are not the same size we cannot add these two matrices.   and so . Thus and   . Since this is a matrix there is no entry in row , column .    "
},
{
  "id": "Sec-Addition_and_Scalar_Multiplication-6",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Addition_and_Scalar_Multiplication-6",
  "type": "Theorem",
  "number": "17.11",
  "title": "Properties of Scalar Multiplication and Matrix Addition.",
  "body": " Properties of Scalar Multiplication and Matrix Addition   Let , and be matrices of the same size. Then  (A1)  (Commutative Law)  (A2)  (Associative Law)  (A3)  (Identity Law)  (A4)  (Inverse Law)  (S1)    (S2)    (S3)    (S4)       "
},
{
  "id": "Sec-Addition_and_Scalar_Multiplication-7-2",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Addition_and_Scalar_Multiplication-7-2",
  "type": "Exercise",
  "number": "17.1.1",
  "title": "",
  "body": " Let   Find .  Find .    "
},
{
  "id": "Sec-Addition_and_Scalar_Multiplication-7-3",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Addition_and_Scalar_Multiplication-7-3",
  "type": "Exercise",
  "number": "17.1.2",
  "title": "",
  "body": " Show that for any matrix , . For what values of is it true that ?  "
},
{
  "id": "Sec-Addition_and_Scalar_Multiplication-7-4",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Addition_and_Scalar_Multiplication-7-4",
  "type": "Exercise",
  "number": "17.1.3",
  "title": "",
  "body": " Prove that for two matrices and of the same size .  "
},
{
  "id": "Sec-Matrix_multiplication-2",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrix_multiplication-2",
  "type": "Definition",
  "number": "17.12",
  "title": "",
  "body": " Let and . Then matrix multiplication is defined by   "
},
{
  "id": "Ex-Matrix_multiplication_not_commutative",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Matrix_multiplication_not_commutative",
  "type": "Example",
  "number": "17.13",
  "title": "",
  "body": " Let   Calculate .  Calculate .       is not defined.       Since is a matrix and is then is defined since has columns and has rows. The resultant matrix will be a matrix since has rows and has columns. Thus will be of the form Now and so     is not defined because the number of columns in (i.e. 2) is not equal to the number of rows in (i.e. 3).    Notice that this example shows that matrix multiplication is not commutative, i.e. in general   "
},
{
  "id": "Ex-Matrix_multiplication_associative",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Matrix_multiplication_associative",
  "type": "Example",
  "number": "17.14",
  "title": "",
  "body": " Let   Calculate .  Calculate .                      Notice that this example is an illustration that matrix multiplication is associative, i.e. in general .   "
},
{
  "id": "Sec-Matrix_multiplication-7",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrix_multiplication-7",
  "type": "Theorem",
  "number": "17.15",
  "title": "Properties of Matrix Multiplication.",
  "body": " Properties of Matrix Multiplication   Let , and be appropriately sized matrices. Then  (Associative Law)  (Left Distributive Law)  (Right Distributive Law)   if is an matrix (Identity Law)     "
},
{
  "id": "Sec-Matrix_multiplication-9",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrix_multiplication-9",
  "type": "Theorem",
  "number": "17.16",
  "title": "Properties of Matrix Transpose.",
  "body": " Properties of Matrix Transpose   Let and be appropriately sized matrices. Then          where .     "
},
{
  "id": "Ex-Properties_of_transpose",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Properties_of_transpose",
  "type": "Example",
  "number": "17.17",
  "title": "",
  "body": "  Confirm that holds for the matrices    Firstly Next    "
},
{
  "id": "Sec-Matrix_multiplication-11-2",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrix_multiplication-11-2",
  "type": "Exercise",
  "number": "17.2.1",
  "title": "",
  "body": " Let   Calculate .  Calculate .    "
},
{
  "id": "Sec-Matrix_multiplication-11-3",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrix_multiplication-11-3",
  "type": "Exercise",
  "number": "17.2.2",
  "title": "",
  "body": " Let   Calculate .  Calculate .    "
},
{
  "id": "Ex-Matrix_for_systems_of_equations",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Matrix_for_systems_of_equations",
  "type": "Example",
  "number": "17.18",
  "title": "",
  "body": "  The system of linear equations can be written as    "
},
{
  "id": "Sec-Matrices_and_Systems_of_Linear_Equations-6",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrices_and_Systems_of_Linear_Equations-6",
  "type": "Theorem",
  "number": "17.19",
  "title": "",
  "body": "  Consider the non-homogenous system of linear equations and the corresponding homogeneous system   If has two distinct solutions then it has an infinite number of solutions.  If has a unique solution then has only the trivial solution .  If has an infinite number of solution then so does .        Let and be two distinct solutions to and let . By using the properties of matrix multiplication we can see that So, any vector of the form , , will be a solution to since , i.e. has an infinite number of solutions.  Let be the unique solution to and let be a non-zero solution to . Then and so is another solution to , which is not possible. Thus there cannot be any non-zero solutions to .  Since has an infinite number of solutions let and be two distinct solutions to . Now let and . Then , i.e. there are an infinite number of solutions to .     "
},
{
  "id": "Sec-Matrices_and_Systems_of_Linear_Equations-8",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrices_and_Systems_of_Linear_Equations-8",
  "type": "Remark",
  "number": "17.20",
  "title": "",
  "body": "  Consider the system of linear equations whose augmented matrix is The following statements are equivalent:  The system has a unique solution.  The planes represented by the rows intersect in a point.  The column vectors of the coefficient matrix are linearly independent.     "
},
{
  "id": "Sec-Matrices_and_Systems_of_Linear_Equations-9-2",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Matrices_and_Systems_of_Linear_Equations-9-2",
  "type": "Exercise",
  "number": "17.3.1",
  "title": "",
  "body": " Consider the following system of linear equations:   Calculate where .  Show that is a solution to the system of equations.  Write down all solutions to the system of equations.    "
},
{
  "id": "Ex-Linear_transformation_reflection",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Linear_transformation_reflection",
  "type": "Example",
  "number": "17.21",
  "title": "",
  "body": "  Consider the matrix Since is a matrix, we can think of as a transformation that takes each vector in the plane to another vector in the plane, . Under this transformation, for example, goes to and goes to See       In fact, is the matrix for the transformation that we would describe as a reflection in the line . To see this, let the vector be transformed to the vector under this reflection. Then we know that which we can write via matrices as   Run the Sage cell below to see the effect of the transformation matrix on some input (a sketch of a house).    "
},
{
  "id": "Ex-Linear_transformation_rotation",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Linear_transformation_rotation",
  "type": "Example",
  "number": "17.23",
  "title": "",
  "body": "  It can be shown that a rotation (in the plane) about the origin through angle can be represented by the matrix  For example the matrix for a rotation about the origin through (or ) is  Run the Sage cell below to see the effect of the rotation matrix on some input (a sketch of a house).    "
},
{
  "id": "Ex-Linear_transformation_reflection_rotation",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Ex-Linear_transformation_reflection_rotation",
  "type": "Example",
  "number": "17.24",
  "title": "",
  "body": "  Determine the matrix for the transformation in which a reflection in the line is followed by a rotation about the origin through .       Let and Then, under the given transformation the vector will be mapped to the vector where so the required matrix can be found via matrix multiplication, i.e.,   Note that given that the matrix for a reflection in the line is we can see that the matrix represents a reflection in the line .   "
},
{
  "id": "Sec-Linear_transformations-6",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Linear_transformations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformations "
},
{
  "id": "Sec-Linear_transformations-7",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Linear_transformations-7",
  "type": "Remark",
  "number": "17.25",
  "title": "",
  "body": " Linear transformations in 3 dimensions are also possible. The Sage cell below plots the effect of a linear transformation on three unit vectors and the parallelepiped spanned by them.   "
},
{
  "id": "Sec-Linear_transformations-8-2",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Linear_transformations-8-2",
  "type": "Exercise",
  "number": "17.4.1",
  "title": "",
  "body": " Which vectors are mapped to under the transformation whose matrix is .  "
},
{
  "id": "Sec-Linear_transformations-8-3",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Linear_transformations-8-3",
  "type": "Exercise",
  "number": "17.4.2",
  "title": "",
  "body": " Find the matrix for the transformation of the plane in which a rotation about the origin through is followed by a reflection in the line .  "
},
{
  "id": "Sec-Linear_transformations-8-4",
  "level": "2",
  "url": "Chap-Linear_Algebra_3.html#Sec-Linear_transformations-8-4",
  "type": "Exercise",
  "number": "17.4.3",
  "title": "",
  "body": " Find the vector to which is mapped by followed by followed by   "
},
{
  "id": "Linear_Algebra_4",
  "level": "1",
  "url": "Linear_Algebra_4.html",
  "type": "Chapter",
  "number": "18",
  "title": "LA4: Square Matrices",
  "body": "    LA4: Square Matrices       Recall that a square matrix is a matrix with the same number of rows as columns. We call an matrix a square matrix of order . When we add or multiply two square matrices of order we always obtain a square matrix of order . The zero matrix, , of order is the matrix with all entries , i.e.   and has the properties             where is any square matrix of order . The identity matrix, of order is the matrix with on the main diagonal and all other entries ., i.e. The identity matrix has the property that for any square matrix of order        is the only matrix that satisfies this property.        Inverse Matrices   Inverse Matrix  Given the square matrix , if there exists a square matrix such that then we call the matrix the inverse of and write .   Note:  If matrix is the inverse of matrix then matrix is the inverse of matrix , i.e.   If matrix has an inverse then we say that is invertible or non-singular .  The inverse of a matrix (if it exists) is unique.  For matrix , if there exists a matrix such that then it follows that as well.     Let Calculate              Thus     Show that is not invertible.  Assume that exists. Then, since we have that which is a contradiction. Thus we conclude that does not exist.   Given a square matrix to find its inverse we need to find a matrix such that . Let’s begin by considering the case. Let where , , and are given. We want to find the entries in Since we have that or equivalently, Both systems of equations have the same coefficient matrix, i.e. The augmented matrices for these systems are and since these have the same coefficient matrix we can combine the augmented matrices to get By reducing this matrix to reduced row echelon form we can solve both sets of equations at the same time. If has an inverse then the reduced row-echelon form will be and hence and . Thus, the augmented section of this matrix will contain .   Find the inverse of matrix      Begin by augmenting matrix with the identity matrix  Now use the elementary row operations to reduce this to reduced row echelon form We can read off the inverse as     Find the inverse of matrix    has no inverse.  Using the same procedure as in begin by augmenting matrix with the identity matrix , Now use the elementary row operations to reduce this to reduced row echelon form. Since there is a row of 's in the coefficient part of the reduced row echelon form while the remainder of the row is non-zero, we can see that there is no solution to the equations for finding the entries in the inverse matrix for . Thus, we conclude that matrix is not invertible, i.e. has no inverse.   The reasoning applied above to find a procedure for finding the inverse of a matrix applies equally well to any sized square matrix. Thus we have a general procedure for finding the inverse of a square matrix.   Given the square matrix , to find its inverse :  Form the matrix by augmenting with the identity matrix   Row reduce to reduced row echelon form,  If the reduced row echelon matrix is of the form read off . Otherwise the inverse does not exist.      Find the inverse, if it exists, of      Form the augmented matrix and row reduce to reduced row echelon form: Thus Of course we can always check our answer by confirming that .    Find the inverse, if it exists, of    has no inverse.  Form the augmented matrix and row reduce to reduced row echelon form: Since the coefficient part of the reduced row echelon matrix is not the identity matrix does not have an inverse.     For later reference, some properties of the inverse of a matrix are listed below.   Properties of the Matrix Inverse  Let and be square invertible matrices of order and let be a real number. Then                     Confirm that holds for the matrices.   Firstly, and so Next  and so    The idea of a matrix inverse can be related to the problem of solving systems of linear equations in the case where the number of equations in the system is the same as the number of variables. As we have seen previously, we can write the system of linear equations in unknowns  using matrix notation as where is the coefficient matrix, is the column vector of variables and is the column vector of the constants. If the coefficient matrix has an inverse, then from    Solve the system of equations        In matrix notation this system can be written as We found the inverse of the coefficient matrix in and, using that result, we have Thus the solution is   Of course, the work involved finding the inverse of a matrix is (basically) the same as that of solving a system of linear equations via Gauss Jordan elimination since in both cases we have to row reduce the coefficient matrix to reduced row echelon form. Thus there is no real benefit to solving a system of equations in variables using a matrix inverse. However the idea does highlight the following connections.  Consider the non-homogenous system of linear equations in variables The following statements are equivalent:  The system has a unique solution,   has only the trivial solution   The columns of are linearly independent,   is invertible.      Example Tasks  Find the inverse, if it exists, of   Find the matrix for a rotation in the plane about the origin through . Find the inverse of this matrix and interpret it geometrically.         Determinants  If we attempted to find the inverse of the general matrix we would find that, if the inverse is and if then does not have an inverse. Thus for a matrix, , calculating the quantity can act as a test for the invertibility of . This quantity is called the determinant of and is denoted by    Find the determinant of        Note that since the determinant is not zero this matrix is invertible.    We can also think about the determinant of a matrix geometrically. We know (see ) that a matrix has an inverse when its column vectors are linearly independent. Thus, the matrix will have an inverse when the vectors and are linearly independent. Now we also know (from ) that two vectors in the plane are linearly independent if they define a parallelogram with non-zero area. Finally, from Math1110, we know that the area of the parallelogram defined by the vectors and is Thus matrix will have an inverse when , i.e.   Let's now apply the same geometric argument to the general matrix   Three vectors in space are linearly independent if they define a parallelepiped with non-zero volume. Now, the volume of the parallelepiped formed by the vectors is i.e. the absolute values of the scalar triple product of the vectors, (again see Math1110). Thus the matrix will have an inverse when Hence for a matrix its determinant is defined as    Find the determinant of      Let Then and hence    While we can calculate the determinant of a matrix using formula other algorithms have been derived and have the advantage that they easily generalise to matrices of orders higher than .     For the matrix , .  For the matrix we define the minor,  as the determinant of the matrix obtained by deleting the th row and the th column of . Then or       ( revisited)  Find the determinant of      Using the first of the formulas given above with      Find the determinant of       Using the second of the formulas given above with  Notice that for a matrix that is upper triangular the determinant is just the product of the entries on the main diagonal.    Calculating the determinant of a matrix via minors is relatively easy. However for matrices of higher orders the calculation can become very tedious. For example, to calculate the determinant of a matrix potentially involves calculating the determinants of four matrices. Thus for large matrices the preferred strategy for calculating its determinant is based on the observation that for an upper triangular matrix the determinant is just the product of the entries on the main diagonal.    To calculate the determinant of the matrix :   Row reduce to an equivalent upper triangular matrix, , noting that;   If matrix is obtained from matrix by interchanging rows then   If matrix is obtained from matrix by multiplying a row of by a scalar then   If matrix is obtained from matrix by adding a multiple of one row of to another then     Find the determinant of by finding the product of the entries on the main diagonal of .      ( revisited)  Find the determinant of      Using the row reduction method, first reduce to an equivalent upper triangular matrix. Since the only elementary row operation used here was that of adding a multiple of one row to another the determinant of the reduced matrix will be the same as the determinant of . Thus   For later reference, some properties of the determinant of a matrix are listed below.  Properties of the Determinant  Let and be square invertible matrices of order and let be a real number. Then                  Calculate the determinant of the following matrices. Which property of determinants does this illustrate?   Firstly, Next Since and are square matrices of order and the fact that illustrates Property of above.  To close this section, note that we can now add one more statement to our theorem connecting the ideas that we have studied so far.  Consider the non-homogenous system of linear equations in variables The following statements are equivalent:  The system has a unique solution,   has only the trivial solution   The columns of are linearly independent,   is invertible.   .      Example Tasks  Find the determinant of   Using the minor formula.  Using row reduction to an upper triangular matrix.      "
},
{
  "id": "Inverse_Matrices-2",
  "level": "2",
  "url": "Linear_Algebra_4.html#Inverse_Matrices-2",
  "type": "Definition",
  "number": "18.1",
  "title": "Inverse Matrix.",
  "body": " Inverse Matrix  Given the square matrix , if there exists a square matrix such that then we call the matrix the inverse of and write .  "
},
{
  "id": "Inverse_Matrices-3",
  "level": "2",
  "url": "Linear_Algebra_4.html#Inverse_Matrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible non-singular "
},
{
  "id": "Ex-Matrix_multiplication_inverse",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Matrix_multiplication_inverse",
  "type": "Example",
  "number": "18.2",
  "title": "",
  "body": " Let Calculate              Thus   "
},
{
  "id": "Ex-Matrix_not_invertible",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Matrix_not_invertible",
  "type": "Example",
  "number": "18.3",
  "title": "",
  "body": " Show that is not invertible.  Assume that exists. Then, since we have that which is a contradiction. Thus we conclude that does not exist.  "
},
{
  "id": "Ex-Inverse_Matrix_1_1_1_2",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Inverse_Matrix_1_1_1_2",
  "type": "Example",
  "number": "18.4",
  "title": "",
  "body": " Find the inverse of matrix      Begin by augmenting matrix with the identity matrix  Now use the elementary row operations to reduce this to reduced row echelon form We can read off the inverse as   "
},
{
  "id": "Ex-Inverse_Matrix_1_minus1_1_minus1",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Inverse_Matrix_1_minus1_1_minus1",
  "type": "Example",
  "number": "18.5",
  "title": "",
  "body": " Find the inverse of matrix    has no inverse.  Using the same procedure as in begin by augmenting matrix with the identity matrix , Now use the elementary row operations to reduce this to reduced row echelon form. Since there is a row of 's in the coefficient part of the reduced row echelon form while the remainder of the row is non-zero, we can see that there is no solution to the equations for finding the entries in the inverse matrix for . Thus, we conclude that matrix is not invertible, i.e. has no inverse.  "
},
{
  "id": "Inverse_Matrices-10",
  "level": "2",
  "url": "Linear_Algebra_4.html#Inverse_Matrices-10",
  "type": "Theorem",
  "number": "18.6",
  "title": "",
  "body": " Given the square matrix , to find its inverse :  Form the matrix by augmenting with the identity matrix   Row reduce to reduced row echelon form,  If the reduced row echelon matrix is of the form read off . Otherwise the inverse does not exist.    "
},
{
  "id": "Ex-Inverse_Matrix_2_1_6_minus4_5_minus3_2_minus1_3",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Inverse_Matrix_2_1_6_minus4_5_minus3_2_minus1_3",
  "type": "Example",
  "number": "18.7",
  "title": "",
  "body": " Find the inverse, if it exists, of      Form the augmented matrix and row reduce to reduced row echelon form: Thus Of course we can always check our answer by confirming that .  "
},
{
  "id": "Ex-Inverse_Matrix_2_1_6_minus4_5_minus3_2_8_15",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Inverse_Matrix_2_1_6_minus4_5_minus3_2_8_15",
  "type": "Example",
  "number": "18.8",
  "title": "",
  "body": " Find the inverse, if it exists, of    has no inverse.  Form the augmented matrix and row reduce to reduced row echelon form: Since the coefficient part of the reduced row echelon matrix is not the identity matrix does not have an inverse.  "
},
{
  "id": "Inverse_Matrices-14",
  "level": "2",
  "url": "Linear_Algebra_4.html#Inverse_Matrices-14",
  "type": "Theorem",
  "number": "18.9",
  "title": "Properties of the Matrix Inverse.",
  "body": " Properties of the Matrix Inverse  Let and be square invertible matrices of order and let be a real number. Then                   "
},
{
  "id": "Ex-Confirm_ABinverse_equal_B_inverse_A_inverse",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Confirm_ABinverse_equal_B_inverse_A_inverse",
  "type": "Example",
  "number": "18.10",
  "title": "",
  "body": " Confirm that holds for the matrices.   Firstly, and so Next  and so   "
},
{
  "id": "Ex-Solve_sys_equation_by_inverse_matrix",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-Solve_sys_equation_by_inverse_matrix",
  "type": "Example",
  "number": "18.11",
  "title": "",
  "body": " Solve the system of equations        In matrix notation this system can be written as We found the inverse of the coefficient matrix in and, using that result, we have Thus the solution is   "
},
{
  "id": "Th-non_homogeneous_system",
  "level": "2",
  "url": "Linear_Algebra_4.html#Th-non_homogeneous_system",
  "type": "Theorem",
  "number": "18.12",
  "title": "",
  "body": " Consider the non-homogenous system of linear equations in variables The following statements are equivalent:  The system has a unique solution,   has only the trivial solution   The columns of are linearly independent,   is invertible.    "
},
{
  "id": "Inverse_Matrices-31-2",
  "level": "2",
  "url": "Linear_Algebra_4.html#Inverse_Matrices-31-2",
  "type": "Exercise",
  "number": "18.1.1",
  "title": "",
  "body": "Find the inverse, if it exists, of  "
},
{
  "id": "Inverse_Matrices-31-3",
  "level": "2",
  "url": "Linear_Algebra_4.html#Inverse_Matrices-31-3",
  "type": "Exercise",
  "number": "18.1.2",
  "title": "",
  "body": "Find the matrix for a rotation in the plane about the origin through . Find the inverse of this matrix and interpret it geometrically. "
},
{
  "id": "Determinants-2",
  "level": "2",
  "url": "Linear_Algebra_4.html#Determinants-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "determinant "
},
{
  "id": "Ex-determinant_2_by_2_matrix",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-determinant_2_by_2_matrix",
  "type": "Example",
  "number": "18.13",
  "title": "",
  "body": " Find the determinant of        Note that since the determinant is not zero this matrix is invertible.   "
},
{
  "id": "Ex-determinant_3_by_3_matrix_by_volume",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-determinant_3_by_3_matrix_by_volume",
  "type": "Example",
  "number": "18.14",
  "title": "",
  "body": " Find the determinant of      Let Then and hence   "
},
{
  "id": "Determinants-9",
  "level": "2",
  "url": "Linear_Algebra_4.html#Determinants-9",
  "type": "Theorem",
  "number": "18.15",
  "title": "",
  "body": "   For the matrix , .  For the matrix we define the minor,  as the determinant of the matrix obtained by deleting the th row and the th column of . Then or     "
},
{
  "id": "Ex-determinant_3_by_3_matrix_by_minor",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-determinant_3_by_3_matrix_by_minor",
  "type": "Example",
  "number": "18.16",
  "title": "(Example 18.14 revisited).",
  "body": " ( revisited)  Find the determinant of      Using the first of the formulas given above with    "
},
{
  "id": "Ex-determinant_3_by_3_matrix_by_minor_upper_triangle_case",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-determinant_3_by_3_matrix_by_minor_upper_triangle_case",
  "type": "Example",
  "number": "18.17",
  "title": "",
  "body": " Find the determinant of       Using the second of the formulas given above with  Notice that for a matrix that is upper triangular the determinant is just the product of the entries on the main diagonal.   "
},
{
  "id": "Determinants-13",
  "level": "2",
  "url": "Linear_Algebra_4.html#Determinants-13",
  "type": "Theorem",
  "number": "18.18",
  "title": "",
  "body": "  To calculate the determinant of the matrix :   Row reduce to an equivalent upper triangular matrix, , noting that;   If matrix is obtained from matrix by interchanging rows then   If matrix is obtained from matrix by multiplying a row of by a scalar then   If matrix is obtained from matrix by adding a multiple of one row of to another then     Find the determinant of by finding the product of the entries on the main diagonal of .    "
},
{
  "id": "Ex-determinant_3_by_3_matrix_by_Echelonizing",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-determinant_3_by_3_matrix_by_Echelonizing",
  "type": "Example",
  "number": "18.19",
  "title": "(Example 18.14 revisited).",
  "body": " ( revisited)  Find the determinant of      Using the row reduction method, first reduce to an equivalent upper triangular matrix. Since the only elementary row operation used here was that of adding a multiple of one row to another the determinant of the reduced matrix will be the same as the determinant of . Thus   "
},
{
  "id": "Th-Determinant_Property",
  "level": "2",
  "url": "Linear_Algebra_4.html#Th-Determinant_Property",
  "type": "Theorem",
  "number": "18.20",
  "title": "Properties of the Determinant.",
  "body": " Properties of the Determinant  Let and be square invertible matrices of order and let be a real number. Then                "
},
{
  "id": "Ex-determinant_2_by_2_matrix_Property",
  "level": "2",
  "url": "Linear_Algebra_4.html#Ex-determinant_2_by_2_matrix_Property",
  "type": "Example",
  "number": "18.21",
  "title": "",
  "body": " Calculate the determinant of the following matrices. Which property of determinants does this illustrate?   Firstly, Next Since and are square matrices of order and the fact that illustrates Property of above.  "
},
{
  "id": "Th-non_homogeneous_system_Update",
  "level": "2",
  "url": "Linear_Algebra_4.html#Th-non_homogeneous_system_Update",
  "type": "Theorem",
  "number": "18.22",
  "title": "",
  "body": " Consider the non-homogenous system of linear equations in variables The following statements are equivalent:  The system has a unique solution,   has only the trivial solution   The columns of are linearly independent,   is invertible.   .    "
},
{
  "id": "Determinants-18-2",
  "level": "2",
  "url": "Linear_Algebra_4.html#Determinants-18-2",
  "type": "Exercise",
  "number": "18.2.1",
  "title": "",
  "body": "Find the determinant of   Using the minor formula.  Using row reduction to an upper triangular matrix.   "
},
{
  "id": "Linear_Algebra_5",
  "level": "1",
  "url": "Linear_Algebra_5.html",
  "type": "Chapter",
  "number": "19",
  "title": "LA5: Eigenvalues and Eigenvectors",
  "body": "    LA5: Eigenvalues and Eigenvectors            Introduction   Let A be a square matrix of order . The scalar is called an eigenvalue of if there is a non-zero vector for which  is called an eigenvector of associated with the eigenvalue .    For the matrix determine if any of , or are eigenvectors of .   and are eigenvectors of .    Since  is an eigenvector of associated with the eigenvalue . Since  is not an eigenvector of . Since  is also an eigenvector of associated with the eigenvalue .     The matrix is the matrix for the plane transformation of a reflection in the line . Use this geometric interpretation of the matrix to determine the possible eigenvectors and eigenvalues of .    with eigenvalue .   with eigenvalue .    By definition eigenvectors satisfy the equation Thinking in terms of transformations this equation says that an eigenvector will be a vector that is mapped by the transformation to some scalar multiple of itself, (i.e. to a vector parallel to itself). As illustrated in any vector lying on the line will be mapped to itself by a reflection in that line, i.e. for such vectors Thus vectors of the form will be eigenvectors of with an eigenvalue of . (Note that we could check this algebraically if so desired.)  As also illustrated in , any vector perpendicular to the line will be mapped by a reflection in that line to a vector of the same length but in the opposite direction, i.e. for such vectors Thus vectors of the form will be eigenvectors of with an eigenvalue of .   Since no other vectors will be mapped by a reflection in the line into scalar multiples of themselves, will not have any more eigenvectors.     Given that is an eigenvalue for the matrix find all eigenvectors associated with this eigenvalue.   The eigenvectors associated with the eigenvalue are all scalar multiples of the vector .    An eigenvector, , associated with the eigenvalue will satisfy the system of linear equations which can be rewritten as Now, using Gauss Jordon elimination to solve this homogeneous system we see that this system has an infinite number of solutions which take the form or equivalently Thus the eigenvectors associated with the eigenvalue are all scalar multiples of the vector .  Of course, it is a good idea to check this result. Since it is correct.          Finding Eigenvalues and Eigenvectors  For the square matrix , the eigenvalues and associated eigenvectors are defined by the equation Thus, we want to find values of , and associated vectors , that satisfy this equation. To do this, rearrange to obtain which can be written as or where is the identity matrix of order . Since is a homogeneous system of linear equations it will only have a non-zero solution when    The eigenvalues, , of the matrix are found by solving the characteristic equation  The eigenvectors of the matrix are found by solving the homogeneous linear system of equations for each eigenvalue .    Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The eigenvalues, , of satisfy the characteristic equation Since the characteristic equation is Thus the eigenvalues for are   To find the eigenvectors associated with each of these eigenvalues we follow the procedure illustrated in , i.e. solve the homogeneous system of linear equations for each eigenvalue.  When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form As always, you can very easily check that these vectors are indeed eigenvectors by performing the matrix multiplication .  As an aside, we can get some geometric insight if we consider as the matrix of a plane transformation, (even though isn’t the matrix for any well known transformation). shows the result of applying to a square centred on the origin.   Informally, the effect of is to pull the square out along the diagonal joining vertices and . Thus vectors along this diagonal will be mapped to scalar multiples of themselves while vectors along the diagonal joining vertices and will be left unchanged.     Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Thus the eigenvalues for are Clearly the eigenvalues don't always turn out to be nice numbers, even when the matrix is quite simple. The eigenvectors will also turn out to be rather complicated.  When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form      Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Thus the eigenvalues for are When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form     Notice that when is an eigenvalue of the system of equations that are solved to find the associated eigenvectors, i.e. reduces to Since is an eigenvalue of we know that this system must have non-zero solutions which in turn tells us that is not invertible. Thus, if has as an eigenvalue it will not be invertible and vice versa.   Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is This equation has no real solutions and so does not have any real eigenvalues. (Notice that is the matrix for a rotation in the plane about the origin and through .) However there are applications where it is advantageous to allow the eigenvalues and eigenvectors to be complex. So, proceeding as before, the eigenvalues for are When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form     As we have seen the characteristic equation for a matrix is always a polynomial of degree . Once we allow complex solutions we can that every matrix will have exactly eigenvalues (so long as we count repeated roots). In fact, it can be shown that this result holds more generally. Every square matrix of order has eigenvalues (counting repeated roots).   Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Now, using the minors method and expanding along row 1, Thus the eigenvalues for satisfy Since is a repeated root of the characteristic equation we say that this is an eigenvalue of multiplicity  . Also, since is an eigenvalue of we know that is not invertible.  When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form      Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Now, using the minors method and expanding down column 1, Thus the eigenvalues for satisfy When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form     As illustrated in , for an upper triangular matrix the eigenvalues are the entries on the main diagonal. Unfortunately, we cannot use row reduction to find eigenvalues because equivalent matrices do not necessarily have the same eigenvalues. Interestingly though, it can be shown that sum of the eigenvalues of any square matrix is equal to the sum of the entries on the main diagonal (i.e. to the trace of the matrix).  To close this section, we can once again add one more statement to our theorem connecting the ideas that we have studied so far.   Consider the non-homogenous system of linear equations in variables The following statements are equivalent:  The system has a unique solution.  has only the trivial solution  The columns of are linearly independent  is invertible   is not an eigenvalue of      We can visualise the relationship between a square matrix and its eigenvectors using the Sage cell below. This code plots the unit vector with angle in blue, i.e. the vector . It also plots in red the vector . When these vectors are parallel, is an eigenvector of .   Here is a better visualisation of eigenvectors: since the property of being an eigenvector of a given matrix depends only on the direction (not magnitude) of the vector, we draw a bunch of (blue) unit vectors , as well as the output vectors in red. Where the red vector is parallel to the blue one pointing to it, that blue vector is an eigenvector. The factor by which its red vector is longer or shorter is the corresponding eigenvalue.   The Sage cell below shows this same concept in three dimensions.     Example Tasks   Find all eigenvalues and associated eigenvectors for     Find all eigenvalues and associated eigenvectors for     Show that if is an eigenvalue of the matrix then is an eigenvalue of the matrix .          A Simple Application  Imagine that a query into an internet search engine finds websites. The engine wants to report these sites to the user in some sort of order relating to how useful each site might be, i.e. the engine wants to work out a ranking for each site.  One approach to this problem is to look at the links between the sites. For the sake of discussion, let the links between the sites be as shown in .   We can represent the information in this diagram via a matrix where the entries satisfy Thus Now let be the ranking of website . Then we require  and The idea here is that if a site has links to it from an important site (i.e. one with a high ranking) then that is better than having a link to it from an obscure site (i.e. one with a low ranking). So, letting the constant of proportionality be , for the websites linked according to we have or, in matrix form Thus the rankings satisfy the equation or i.e. an eigenvalue problem. For the matrix as given above it turns out that the ranking vector is and so the sites would be listed in the order .  Of course Google’s page ranking system is much more sophisticated than that described above but the idea is essentially the same. Also, there is much more advanced mathematics needed behind the scenes than indicated above. For example how do we know which eigenvalue and associated eigenvector to take? What happens if all of the eigenvalues are complex? And so on.    "
},
{
  "id": "Sec-LA_5_Introduction-2",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Introduction-2",
  "type": "Definition",
  "number": "19.1",
  "title": "",
  "body": " Let A be a square matrix of order . The scalar is called an eigenvalue of if there is a non-zero vector for which  is called an eigenvector of associated with the eigenvalue .  "
},
{
  "id": "Sec-LA_5_Introduction-3",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Introduction-3",
  "type": "Example",
  "number": "19.2",
  "title": "",
  "body": " For the matrix determine if any of , or are eigenvectors of .   and are eigenvectors of .    Since  is an eigenvector of associated with the eigenvalue . Since  is not an eigenvector of . Since  is also an eigenvector of associated with the eigenvalue .   "
},
{
  "id": "Sec-LA_5_Introduction-4",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Introduction-4",
  "type": "Example",
  "number": "19.3",
  "title": "",
  "body": " The matrix is the matrix for the plane transformation of a reflection in the line . Use this geometric interpretation of the matrix to determine the possible eigenvectors and eigenvalues of .    with eigenvalue .   with eigenvalue .    By definition eigenvectors satisfy the equation Thinking in terms of transformations this equation says that an eigenvector will be a vector that is mapped by the transformation to some scalar multiple of itself, (i.e. to a vector parallel to itself). As illustrated in any vector lying on the line will be mapped to itself by a reflection in that line, i.e. for such vectors Thus vectors of the form will be eigenvectors of with an eigenvalue of . (Note that we could check this algebraically if so desired.)  As also illustrated in , any vector perpendicular to the line will be mapped by a reflection in that line to a vector of the same length but in the opposite direction, i.e. for such vectors Thus vectors of the form will be eigenvectors of with an eigenvalue of .   Since no other vectors will be mapped by a reflection in the line into scalar multiples of themselves, will not have any more eigenvectors.   "
},
{
  "id": "Ex-Find_all_eigenvectors_given_eigenvalue",
  "level": "2",
  "url": "Linear_Algebra_5.html#Ex-Find_all_eigenvectors_given_eigenvalue",
  "type": "Example",
  "number": "19.5",
  "title": "",
  "body": " Given that is an eigenvalue for the matrix find all eigenvectors associated with this eigenvalue.   The eigenvectors associated with the eigenvalue are all scalar multiples of the vector .    An eigenvector, , associated with the eigenvalue will satisfy the system of linear equations which can be rewritten as Now, using Gauss Jordon elimination to solve this homogeneous system we see that this system has an infinite number of solutions which take the form or equivalently Thus the eigenvectors associated with the eigenvalue are all scalar multiples of the vector .  Of course, it is a good idea to check this result. Since it is correct.   "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-3",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-3",
  "type": "Definition",
  "number": "19.6",
  "title": "",
  "body": " The eigenvalues, , of the matrix are found by solving the characteristic equation  The eigenvectors of the matrix are found by solving the homogeneous linear system of equations for each eigenvalue .  "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-4",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-4",
  "type": "Example",
  "number": "19.7",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The eigenvalues, , of satisfy the characteristic equation Since the characteristic equation is Thus the eigenvalues for are   To find the eigenvectors associated with each of these eigenvalues we follow the procedure illustrated in , i.e. solve the homogeneous system of linear equations for each eigenvalue.  When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form As always, you can very easily check that these vectors are indeed eigenvectors by performing the matrix multiplication .  As an aside, we can get some geometric insight if we consider as the matrix of a plane transformation, (even though isn’t the matrix for any well known transformation). shows the result of applying to a square centred on the origin.   Informally, the effect of is to pull the square out along the diagonal joining vertices and . Thus vectors along this diagonal will be mapped to scalar multiples of themselves while vectors along the diagonal joining vertices and will be left unchanged.   "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-5",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-5",
  "type": "Example",
  "number": "19.9",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Thus the eigenvalues for are Clearly the eigenvalues don't always turn out to be nice numbers, even when the matrix is quite simple. The eigenvectors will also turn out to be rather complicated.  When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form    "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-6",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-6",
  "type": "Example",
  "number": "19.10",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Thus the eigenvalues for are When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form    "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-8",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-8",
  "type": "Example",
  "number": "19.11",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is This equation has no real solutions and so does not have any real eigenvalues. (Notice that is the matrix for a rotation in the plane about the origin and through .) However there are applications where it is advantageous to allow the eigenvalues and eigenvectors to be complex. So, proceeding as before, the eigenvalues for are When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form    "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-10",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-10",
  "type": "Example",
  "number": "19.12",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Now, using the minors method and expanding along row 1, Thus the eigenvalues for satisfy Since is a repeated root of the characteristic equation we say that this is an eigenvalue of multiplicity  . Also, since is an eigenvalue of we know that is not invertible.  When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form    "
},
{
  "id": "Ex-Find_eigen_upper_triangular_matrix",
  "level": "2",
  "url": "Linear_Algebra_5.html#Ex-Find_eigen_upper_triangular_matrix",
  "type": "Example",
  "number": "19.13",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for    For , the eigenvectors take the form .  For , the eigenvectors take the form .  For , the eigenvectors take the form .    The characteristic equation for is Now, using the minors method and expanding down column 1, Thus the eigenvalues for satisfy When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form When the augmented matrix and its reduced row echelon form are Thus, the eigenvectors take the form    "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-12",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trace "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-14",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-14",
  "type": "Theorem",
  "number": "19.14",
  "title": "",
  "body": " Consider the non-homogenous system of linear equations in variables The following statements are equivalent:  The system has a unique solution.  has only the trivial solution  The columns of are linearly independent  is invertible   is not an eigenvalue of    "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-15",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-15",
  "type": "Remark",
  "number": "19.15",
  "title": "",
  "body": " We can visualise the relationship between a square matrix and its eigenvectors using the Sage cell below. This code plots the unit vector with angle in blue, i.e. the vector . It also plots in red the vector . When these vectors are parallel, is an eigenvector of .   Here is a better visualisation of eigenvectors: since the property of being an eigenvector of a given matrix depends only on the direction (not magnitude) of the vector, we draw a bunch of (blue) unit vectors , as well as the output vectors in red. Where the red vector is parallel to the blue one pointing to it, that blue vector is an eigenvector. The factor by which its red vector is longer or shorter is the corresponding eigenvalue.   The Sage cell below shows this same concept in three dimensions.   "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-16-2",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-16-2",
  "type": "Exercise",
  "number": "19.2.1",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for   "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-16-3",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-16-3",
  "type": "Exercise",
  "number": "19.2.2",
  "title": "",
  "body": " Find all eigenvalues and associated eigenvectors for   "
},
{
  "id": "Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-16-4",
  "level": "2",
  "url": "Linear_Algebra_5.html#Sec-LA_5_Finding_Eigenvalues_and_Eigenvectors-16-4",
  "type": "Exercise",
  "number": "19.2.3",
  "title": "",
  "body": " Show that if is an eigenvalue of the matrix then is an eigenvalue of the matrix .  "
},
{
  "id": "Fig_5_3_1",
  "level": "2",
  "url": "Linear_Algebra_5.html#Fig_5_3_1",
  "type": "Figure",
  "number": "19.16",
  "title": "",
  "body": "  "
},
{
  "id": "Linear_Algebra_6",
  "level": "1",
  "url": "Linear_Algebra_6.html",
  "type": "Chapter",
  "number": "20",
  "title": "LA6: Some Applications of Eigenvalues and Eigenvectors",
  "body": "    LA6: Some Applications of Eigenvalues and Eigenvectors       We concluded the previous lecture in this series by outlining a practical problem (ranking pages from a web search) whose solution involved finding eigenvalues and eigenvectors of a matrix. In this lecture we are going to look at two mathematical problems where eigenvalues and eigenvectors are useful. (These problems can also be applied to practical situations but we won’t look at any such applications in any detail.)        Powers of Matrices  Given the square matrix of order the problem is to calculate the matrix where . For small values of the calculation can be done by brute force but for large values of this becomes intractable. A solution to this problem if the matrix has distinct eigenvalues is as follows.  Let the distinct eigenvalues of matrix be and let the associated eigenvectors be . Now let be the matrix whose columns are these eigenvectors, i.e.   Then where . Thus . Since . this provides a relatively easy way to calculate for large values of .    Calculate for .         Since is small here it is easiest just to do the matrix multiplications to obtain However, let's illustrate the above method (admittedly leaving out the working of finding eigenvalues, eigenvectors and matrix inverse). has two distinct eigenvalues and with corresponding eigenvectors and , so let . Thus and therefore As an aside, note that     To see why , note that since are eigenvectors of  and by matrix multiplication Since then .  To summarise the above (and introduce some associated terminology):   Diagonal Matrices    A square matrix of order is called diagonal if all of its off-diagonal entries are 0, i.e. it is of the form .  A square matrix of order is called diagonalisable if there exists a matrix such that is a diagonal matrix.  A square matrix of order is diagonalisable if it has distinct eigenvalues.  If a square matrix of order is diagonalisable then .       A town contains inhabitants. Initially of these are sick. Each month there is a change in the population: of those who are well remain well and become sick, of those who are sick recover but remain unwell. What is the long term prognosis for this town?    The long term prognosis for the town is that there will be twice as many well people as sick people.    Let denote the number of people in the town who are well after months and let denote the number of people in the town who are sick after months. Then , or in matrix notation where . Now . Thus we need to calculate powers of . The eigenvalues of are and with corresponding eigenvectors and , and so . Notice that so that as  . We conclude that the long term prognosis for the town is that there will be twice as many well people as sick people.       Example Tasks   Calculate if .    Find a matrix such that is diagonal if .          Coupled Linear Differential Equations  Recall that the linear differential equation , has the solution (via separation of variables) , where is an arbitrary constant. Consider now the system of two linear differential equations where , which can be written in matrix notation as where , and . These equations are coupled , i.e. the derivative of depends on both and and likewise for the derivative of . Thus we can't solve the first equation unless we can solve the second and vice versa. Note that if is diagonal then the equations become uncoupled and we could solve each separately.  If the matrix has 2 distinct eigenvalues, and , by making the change of variable , where is the matrix whose columns are the eigenvectors and of , we can transform into a system where the matrix is diagonal. By solving that system and converting back to our original variables we find that the general solution to is where and are arbitrary constants. We can check that is indeed a solution to . From  and .    Find the solution to the initial value problem , where and .    and    In matrix notation this system is . The eigenvalues of turn out to be and with associated eigenvectors and . Thus, from the general solution is . From the initial conditions we have . Solving this system of linear equations (by Gauss-Jordan elimination say) gives . Thus, the solution to the initial value problem is or equivalently   Note that you can always check your answer by checking that the functions do indeed satisfy the original equations.   shows the graph of these solutions. Notice that as gets larger because of the term in each solution the functions get closer together and because of the term both solutions grow (exponentially). Thus the eigenvalues of the matrix will give us some idea of the qualitative nature of the solutions.          Solve the initial value problem .       The eigenvalues of turn out to be purely complex with and . The associated eigenvectors are and . Thus, from the general solution is . From the initial conditions we have , which upon solving gives . Thus, the solution to the initial value problem is . We can simplify this solution by using Euler's equation . Thus , which simplifies to . This is a real solution! As explained below, because all of the entries in are real and the initial conditions are real the solution will also be real.  As shown in where these solutions are graphed, purely complex eigenvalues are associated with periodic solutions. The period of these solutions is .        Consider the system of coupled linear differential equations where the entries in are all real. Now imagine that this system has a complex solution given by . Taking the complex conjugates of both sides of  . Since and (as the entries in are all real), i.e. will also be a solution to . Substituting into gives while substituting into gives . Now, adding equations and gives , while subtracting from gives Thus if we have a complex solution to then both the real and imaginary parts of this complex solution must separately be solutions and hence a general solution to is . This gives us another way of proceeding when the eigenvalues of are complex.    Find the general solution to .       Here the eigenvalues of are complex with and . The eigenvector associated with is . Thus, one solution to the system is . Simplifying this solution using Euler's equation gives . Since we know that both the real part and the imaginary part are solutions to the system we know that the general solution is . shows a plot of this solution when .      Note the solutions to the system are periodic with the period determined from the imaginary part of the eigenvalue. However, since the real part of the eigenvalue is positive the amplitude of the solutions grows without bound.    The discussion so far has concentrated on systems of two coupled first-order linear differential equations. However the ideas carry over to systems with more equations.   Consider the system of n coupled first-order linear differential equations where is a real matrix with distinct eigenvalues , . Then the general solution to this system is where is the eigenvector corresponding to eigenvalue .   A qualitative description of the solutions to the system can be determined from the eigenvalues of .     If has a positive real eigenvalue then the corresponding solution grows without bound.  If has a negative real eigenvalue then the corresponding solution decays.  If has a zero eigenvalue then the corresponding solution is constant.  If has a pair of complex conjugate eigenvalues then the corresponding solution oscillates with period and with the amplitude either growing , decaying or staying the same .      Example Tasks   Describe the long term behaviour of the solutions to the system , where .      "
},
{
  "id": "Powers_of_Matrices-5",
  "level": "2",
  "url": "Linear_Algebra_6.html#Powers_of_Matrices-5",
  "type": "Example",
  "number": "20.1",
  "title": "",
  "body": "  Calculate for .         Since is small here it is easiest just to do the matrix multiplications to obtain However, let's illustrate the above method (admittedly leaving out the working of finding eigenvalues, eigenvectors and matrix inverse). has two distinct eigenvalues and with corresponding eigenvectors and , so let . Thus and therefore As an aside, note that    "
},
{
  "id": "Powers_of_Matrices-8",
  "level": "2",
  "url": "Linear_Algebra_6.html#Powers_of_Matrices-8",
  "type": "Definition",
  "number": "20.2",
  "title": "Diagonal Matrices.",
  "body": " Diagonal Matrices    A square matrix of order is called diagonal if all of its off-diagonal entries are 0, i.e. it is of the form .  A square matrix of order is called diagonalisable if there exists a matrix such that is a diagonal matrix.  A square matrix of order is diagonalisable if it has distinct eigenvalues.  If a square matrix of order is diagonalisable then .    "
},
{
  "id": "Powers_of_Matrices-9",
  "level": "2",
  "url": "Linear_Algebra_6.html#Powers_of_Matrices-9",
  "type": "Example",
  "number": "20.3",
  "title": "",
  "body": "  A town contains inhabitants. Initially of these are sick. Each month there is a change in the population: of those who are well remain well and become sick, of those who are sick recover but remain unwell. What is the long term prognosis for this town?    The long term prognosis for the town is that there will be twice as many well people as sick people.    Let denote the number of people in the town who are well after months and let denote the number of people in the town who are sick after months. Then , or in matrix notation where . Now . Thus we need to calculate powers of . The eigenvalues of are and with corresponding eigenvectors and , and so . Notice that so that as  . We conclude that the long term prognosis for the town is that there will be twice as many well people as sick people.   "
},
{
  "id": "Powers_of_Matrices-10-2",
  "level": "2",
  "url": "Linear_Algebra_6.html#Powers_of_Matrices-10-2",
  "type": "Exercise",
  "number": "20.1.1",
  "title": "",
  "body": " Calculate if .  "
},
{
  "id": "Powers_of_Matrices-10-3",
  "level": "2",
  "url": "Linear_Algebra_6.html#Powers_of_Matrices-10-3",
  "type": "Exercise",
  "number": "20.1.2",
  "title": "",
  "body": " Find a matrix such that is diagonal if .  "
},
{
  "id": "Coupled_Linear_Differential_Equations-4",
  "level": "2",
  "url": "Linear_Algebra_6.html#Coupled_Linear_Differential_Equations-4",
  "type": "Example",
  "number": "20.4",
  "title": "",
  "body": "  Find the solution to the initial value problem , where and .    and    In matrix notation this system is . The eigenvalues of turn out to be and with associated eigenvectors and . Thus, from the general solution is . From the initial conditions we have . Solving this system of linear equations (by Gauss-Jordan elimination say) gives . Thus, the solution to the initial value problem is or equivalently   Note that you can always check your answer by checking that the functions do indeed satisfy the original equations.   shows the graph of these solutions. Notice that as gets larger because of the term in each solution the functions get closer together and because of the term both solutions grow (exponentially). Thus the eigenvalues of the matrix will give us some idea of the qualitative nature of the solutions.       "
},
{
  "id": "Coupled_Linear_Differential_Equations-5",
  "level": "2",
  "url": "Linear_Algebra_6.html#Coupled_Linear_Differential_Equations-5",
  "type": "Example",
  "number": "20.6",
  "title": "",
  "body": "  Solve the initial value problem .       The eigenvalues of turn out to be purely complex with and . The associated eigenvectors are and . Thus, from the general solution is . From the initial conditions we have , which upon solving gives . Thus, the solution to the initial value problem is . We can simplify this solution by using Euler's equation . Thus , which simplifies to . This is a real solution! As explained below, because all of the entries in are real and the initial conditions are real the solution will also be real.  As shown in where these solutions are graphed, purely complex eigenvalues are associated with periodic solutions. The period of these solutions is .       "
},
{
  "id": "Coupled_Linear_Differential_Equations-7",
  "level": "2",
  "url": "Linear_Algebra_6.html#Coupled_Linear_Differential_Equations-7",
  "type": "Example",
  "number": "20.8",
  "title": "",
  "body": "  Find the general solution to .       Here the eigenvalues of are complex with and . The eigenvector associated with is . Thus, one solution to the system is . Simplifying this solution using Euler's equation gives . Since we know that both the real part and the imaginary part are solutions to the system we know that the general solution is . shows a plot of this solution when .      Note the solutions to the system are periodic with the period determined from the imaginary part of the eigenvalue. However, since the real part of the eigenvalue is positive the amplitude of the solutions grows without bound.   "
},
{
  "id": "Coupled_Linear_Differential_Equations-9",
  "level": "2",
  "url": "Linear_Algebra_6.html#Coupled_Linear_Differential_Equations-9",
  "type": "Theorem",
  "number": "20.10",
  "title": "",
  "body": " Consider the system of n coupled first-order linear differential equations where is a real matrix with distinct eigenvalues , . Then the general solution to this system is where is the eigenvector corresponding to eigenvalue .  "
},
{
  "id": "Coupled_Linear_Differential_Equations-11",
  "level": "2",
  "url": "Linear_Algebra_6.html#Coupled_Linear_Differential_Equations-11",
  "type": "Remark",
  "number": "20.11",
  "title": "",
  "body": "   If has a positive real eigenvalue then the corresponding solution grows without bound.  If has a negative real eigenvalue then the corresponding solution decays.  If has a zero eigenvalue then the corresponding solution is constant.  If has a pair of complex conjugate eigenvalues then the corresponding solution oscillates with period and with the amplitude either growing , decaying or staying the same .    "
},
{
  "id": "Coupled_Linear_Differential_Equations-12-2",
  "level": "2",
  "url": "Linear_Algebra_6.html#Coupled_Linear_Differential_Equations-12-2",
  "type": "Exercise",
  "number": "20.2.1",
  "title": "",
  "body": " Describe the long term behaviour of the solutions to the system , where .  "
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
