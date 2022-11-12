import 'package:flutter/material.dart';
import 'package:myschool/styles/main.dart';
import '../styles/color_pallette.dart';

class LightTheme {
  LightTheme();

  static ThemeData buildTheme() {
    final ThemeData base = ThemeData.light();

    return base.copyWith(
      brightness: Brightness.light,

      primaryColor: kPrimaryBlueGrey,
      primaryColorLight: kPrimaryBlueGreyLight,
      primaryColorDark: kPrimaryBlueGreyDark,

      scaffoldBackgroundColor: kScaffoldBackgroundLightGrey,

      textTheme: _buildTextTheme(base.textTheme),

      // By default takes the primaryColor and TextTheme headline6 style
      appBarTheme: base.appBarTheme.copyWith(
        color: kPrimaryBlueGreyDark, toolbarTextStyle: base.textTheme.copyWith(
          headline6: const TextStyle(
            fontFamily: 'OpenSans',
            fontSize: 28.0,
            fontWeight: FontWeight.bold,
          ),
        ).bodyText2, titleTextStyle: base.textTheme.copyWith(
          headline6: const TextStyle(
            fontFamily: 'OpenSans',
            fontSize: 28.0,
            fontWeight: FontWeight.bold,
          ),
        ).headline6,
      ),

      //Override for the default Card theme
      cardTheme: base.cardTheme.copyWith(
        color: kSecondaryAmber,
        elevation: 1.0,
      ),

      // Override for the default light button theme
      buttonTheme: base.buttonTheme.copyWith(
        buttonColor: kPrimaryBlueGrey,
        textTheme: ButtonTextTheme.primary,
        //Color to start filling the Buttons when pressed.
        splashColor: kPrimaryBlueGreyLight,
      ),

      // Override for the default Textfield style
      inputDecorationTheme: base.inputDecorationTheme.copyWith(
        enabledBorder: OutlineInputBorder(
          borderSide: const BorderSide(
            color: kPrimaryBlueGreyDark,
          ),
          borderRadius: BorderRadius.circular(12),
        ),
        hintStyle: kTextHintStyle,

      ),

      // Overriding the icon theme
      iconTheme: base.iconTheme.copyWith(
        color: kOnSecondaryBlack,
        size: 26.0,
      ), colorScheme: base.colorScheme.copyWith(
        onPrimary: kOnPrimaryWhite,
        onSecondary: kOnSecondaryBlack,
      ).copyWith(secondary: kSecondaryAmber),
    );
  }

  // Method to create and return the text styles
  static _buildTextTheme(TextTheme base) {
    return base
        .copyWith(
      headline6: kHeadline6Style,
      headline5: kHeadline5TextStyle,
      headline4: kHeadline4TextStyle,
      headline3: kHeadline3TextStyle,
      bodyText1: kBodyText1Style,
      bodyText2: const TextStyle(
        color: kOnSecondaryBlack,
        fontSize: 17.0,
        fontWeight: FontWeight.w600,
      ),
      button: kButtonTextStyle,
      caption: kCaptionStyle,

    )
        .apply(
      // This will override and apply to all.
      fontFamily: 'OpenSans',
    );
  }
}

// Overriding the default dark theme
class DarkTheme {
  DarkTheme();

  static
  buildTheme() {
    final ThemeData base = ThemeData.dark();

    return base.copyWith(
      brightness: Brightness.dark,

      primaryColor: kDarkPrimaryBlue,
      primaryColorLight: kDarkPrimaryBlueLight,

      scaffoldBackgroundColor: kDarkScaffoldBackgroundBlack,

      textTheme: _buildTextTheme(base.textTheme),

      // By default takes the primaryColor and TextTheme headline6 style
      appBarTheme: base.appBarTheme.copyWith(
        color: kDarkThemeBlack, toolbarTextStyle: base.textTheme.copyWith(
          headline6: const TextStyle(
            fontFamily: 'OpenSans',
            fontSize: 28.0,
            fontWeight: FontWeight.bold,
          ),
        ).bodyText2, titleTextStyle: base.textTheme.copyWith(
          headline6: const TextStyle(
            fontFamily: 'OpenSans',
            fontSize: 28.0,
            fontWeight: FontWeight.bold,
          ),
        ).headline6,
      ),

      // Ovrriding the default dark card theme
      cardTheme: base.cardTheme.copyWith(
        color: kDarkSecondaryGrey,
        elevation: 0.0,
      ),

      // Overriding the default button theme
      buttonTheme: base.buttonTheme.copyWith(
        buttonColor: kDarkPrimaryBlue,
        textTheme: ButtonTextTheme.primary,
        //Color to start filling the Buttons when pressed.
        splashColor: kDarkPrimaryBlueLight,
      ),

      // Ovveriding the default Textfield style
      inputDecorationTheme: base.inputDecorationTheme.copyWith(
        enabledBorder: OutlineInputBorder(
          borderSide: const BorderSide(
            color: kDarkPrimaryBlue,
          ),
          borderRadius: BorderRadius.circular(12),
        ),
        hintStyle: kTextHintStyle,

      ),

      // Overriding the default dark icon style
      iconTheme: base.iconTheme.copyWith(
        color: kDarkOnSecondaryBlack,
        size: 26.0,
      ), colorScheme: base.colorScheme.copyWith(
        onPrimary: kDarkOnPrimaryWhite,
        onSecondary: kDarkOnSecondaryBlack,
      ).copyWith(secondary: kDarkSecondaryGrey),
    );
  }

  // Method to create and return text styles for the default dark theme
  static _buildTextTheme(TextTheme base) {
    return base
        .copyWith(
      headline6: kHeadline6Style,
      headline5: kHeadline5TextStyle,
      headline4: kHeadline4TextStyle,
      headline3: kHeadline3TextStyle,
      bodyText1: kBodyText1Style,
      bodyText2:  const TextStyle(
        color: kDarkOnPrimaryWhite,
        fontSize: 17.0,
        fontWeight: FontWeight.w600,
      ),
      button: kButtonTextStyle,
      caption: kCaptionStyle,
    )
        .apply(
      // This will override and apply to all.
      fontFamily: 'OpenSans',
    );
  }
}
