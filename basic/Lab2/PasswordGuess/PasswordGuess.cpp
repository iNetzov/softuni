#include <iostream>
using namespace std;
int main()
{
	const string CORRECT_PASSWORD = "s3cr3t!P@ssw0rd";
	string inputPassword;
	cin >> inputPassword;
	if (CORRECT_PASSWORD.compare(inputPassword) == 0) 
	{
		cout << "Welcome";
	}
	else 
	{
		cout << "Wrong password!";
	}
}
