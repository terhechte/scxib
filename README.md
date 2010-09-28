SCXIB - Interface Builder for the Web
=====================================

SCXIB (pronounced ska-zib) grew out of the desire to use Interface Builder
as a design tool for SproutCore applications.

[View the Demo Video]

## How to use SCXIB

### On-the-fly Application Loading

Transform XIB files for your SproutCore application to load and use during development:

    SCXIB.loadXibWithOptions(sc_static('MainPage.xib'), {
      namespace: DemoApp.NAMESPACE,
      pageName: 'mainPage',
      callback: function () {
        DemoApp.getPath('mainPage.mainPane').append();
      }
    });

### XIB to JavaScript

Transform a XIB file into a JavaScript file for your SproutCore application
using a command line tool:
    ./bin/scxib -namespace DemoApp -page mainPage apps/demo_app/resources/MainPage.xib

## Requirements

  - Interface Builder for XCode 3.2.x
  - SproutCore

## Current Class Mappings

  - NSWindow -> SC.Page
  - NSPanel -> SC.Panel
  - NSView -> SC.View
  - NSCustomView -> your app's custom view name
  - NSLabel -> SC.LabelView
  - NSTextField -> SC.TextFieldView
  - NSSplitView -> SC.SplitView
  - IKImageView -> SC.ImageView
  - NSCheckBox -> SC.CheckBoxView
  - NSButton -> SC.ButtonView
  - NSPopUpButton -> SC.SelectFieldView
  - NSSlider -> SC.SliderView
  - NSProgressIndicator -> SC.ProgressView (Preliminary, only indeterminate and
    minimum value / current value are being ignored)
  - NSSegmentedControl -> SC.SegmentedView
  - NSCollectionView -> SC.ListView
  - NSOutlineView -> SC.SourceListView
  - NSScrollView -> SC.ScrollView
  - NSWebView -> SC.WebView
  - NSMatrix -> SC.RadioView
  - NSTabView -> SC.TabView
  - NSTableView -> SC.TableView (Requires Sproutcore 1.4+)
  - NSBox Horizontal/Vertical -> SC.SeparatorView:layoutDirection SC.LAYOUT\_HORIZONTAL/SC.LAYOUT\_VERTICAL

[View the Demo Video]: http://www.vimeo.com/15064851


### Class Documentation
If you want to bind ListViews or TableViews to objects, you need to set a
couple of different runtime parameters, as these bindings are currently not
realized using the IB bindings tab. Here's a documentation of specific
attributes for these objects:

## NSCollectionView / SC.ListView:
- exampleView: Can either be set as a runtime parameter, or subclassing an
  NSCollectionViewItem to the SproutCore item name.

## NSTableView / SC.TableView:
- Support for NSTableView is preliminary. Many of the IB Flags aren't supported
  yet.
- exampleView: Mandatory. Set it as a runtime parameter. You have to set this, even if you
  did not subclass in SC: exampleView: SC.TableRowView
- row Key: The 'Identifier' field in the 'Table Column Attributes' Tab of the IB
  Inspector
- row Label: The 'Title' field in the 'Table Column Attributes' Tab of the IB
  Inspector 

