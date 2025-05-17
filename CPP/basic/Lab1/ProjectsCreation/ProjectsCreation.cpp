#include <iostream>
#include <string>

using  std::cin;
using  std::cout;
using  std::endl;
using  std::string;
namespace constants {
	const int HOURS_PER_PROJECT = 3;
}
using namespace constants;

int main()
{
	string arhitectName = "";
	cin >> arhitectName;
	int projectCount = -1;

	cin >> projectCount;

	cout << "The architect " << arhitectName << " will need " << projectCount * HOURS_PER_PROJECT << " hours to complete " << projectCount << " project/s.";
}

