#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::string;
using std::endl;

int main()
{
	string input = "";
	cin >> input;

	while (input.compare("Stop") != 0)
	{
		cout << input << endl;
	cin >> input;
	}
}
