import 'package:flutter/material.dart';
import 'package:myschool/screens/home.dart';
import 'package:myschool/models/theme.dart';

final ThemeData darkTheme = DarkTheme.buildTheme();
final ThemeData lightTheme = LightTheme.buildTheme();
void main() => runApp(const App());


class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: lightTheme,
      darkTheme: darkTheme,
      home: const HomeScreen()
    );
  }
}
