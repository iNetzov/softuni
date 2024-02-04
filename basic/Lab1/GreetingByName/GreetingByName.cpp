#include <iostream>
#include <string>

using std::string;
using std::cout;
using std::cin;
using std::endl;

namespace personalInfo {
	string fName = "";
}

int main()
{
	string greeting = "Hello";
	cin >> personalInfo::fName;
	cout << "Hello, " << personalInfo::fName << "!" << endl;
}