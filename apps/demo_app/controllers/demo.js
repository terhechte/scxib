// ==========================================================================
// Project:   DemoApp
// Copyright: ©2010 Robert Linton
// Contributors: Devin Torres, Kurt Williams
// ==========================================================================
/*globals DemoApp */

DemoApp.demoController = SC.Object.create({

  people: [],
  message: 'text\narea',
  
  panel1: null,
  buttonClick: function(){
    var p = this.get('panel1') || DemoApp.arTestPane.create();
    this.set('panel1', p);
    p.append();
  },
  
  close: function(){
    this.get('panel1').remove();
  },
  
  radioItems: ['one', 'two', 'three']
});
