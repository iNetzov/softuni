#define _USE_MATH_DEFINES

#include <iostream>
#include <math.h>
#include <cmath>
using namespace std;
namespace constrants {
	const int FORMULA_VALUES = 180;
}
using namespace constrants;

int main()
{
	double radians = -1;

	cin >> radians;
	double degrees = round(radians * FORMULA_VALUES / M_PI);
	cout << degrees;
}
