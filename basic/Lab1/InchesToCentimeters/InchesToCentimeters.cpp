#include <iostream>
using std::cout;
using std::cin;
using std::endl;

namespace constants {
    const double CONVERSION_VALUE = 2.54;
}

int main()
{
    double inches;
    cin >> inches;
    double centimeters = inches * constants::CONVERSION_VALUE;
    cout << centimeters << endl;
}