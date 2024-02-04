#include <iostream>
#include <string>
using std::cout;
using std::cin;
using std::string;

namespace personalInfo {
	string fName = "";
	string lName = "";
	int age = -1;
	string town = "";
}
using namespace	personalInfo;

int main()
{

	cin >> fName >> lName >> age >> town;
	cout << "You are " << fName << " " << lName << ", a " << age << "-years old person from " << town << ".";
}
