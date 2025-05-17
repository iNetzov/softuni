#define _USE_MATH_DEFINES
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
int main()
{
	string inputFigure;
	cin >> inputFigure;
	double area;
	if (inputFigure.compare("square") == 0)
	{
		double a;
		cin >> a;
		area = a * a;
	}
	else if (inputFigure.compare("rectangle") == 0)
	{
		double a;
		double b;
		cin >> a >> b;
		area = a * b;
	}
	else if (inputFigure.compare("circle") == 0)
	{
		double a;
		cin >> a;
		area = M_PI * (a * a);
	}
	else if (inputFigure.compare("triangle") == 0)
	{
		double a;
		double b;
		cin >> a >> b;
		area = b / 2 * a;
	}
	cout.setf(ios::fixed);
	cout << setprecision(3) << area;
}