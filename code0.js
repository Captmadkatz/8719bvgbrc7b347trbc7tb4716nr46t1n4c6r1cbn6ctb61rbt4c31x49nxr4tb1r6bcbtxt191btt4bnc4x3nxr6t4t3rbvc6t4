gdjs.BLJCode = {};
gdjs.BLJCode.GDGROUNDObjects1= [];
gdjs.BLJCode.GDGROUNDObjects2= [];
gdjs.BLJCode.GDPLAYERObjects1= [];
gdjs.BLJCode.GDPLAYERObjects2= [];

gdjs.BLJCode.conditionTrue_0 = {val:false};
gdjs.BLJCode.condition0IsTrue_0 = {val:false};
gdjs.BLJCode.condition1IsTrue_0 = {val:false};


gdjs.BLJCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.BLJCode.GDPLAYERObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.BLJCode.GDPLAYERObjects1.length !== 0 ? gdjs.BLJCode.GDPLAYERObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.BLJCode.condition0IsTrue_0.val = false;
{
gdjs.BLJCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.BLJCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).mul(1.045);
}{runtimeScene.getVariables().getFromIndex(0).add(0.00005);
}}

}


{


gdjs.BLJCode.condition0IsTrue_0.val = false;
{
gdjs.BLJCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
}if (gdjs.BLJCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.BLJCode.GDPLAYERObjects1);
{for(var i = 0, len = gdjs.BLJCode.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.BLJCode.GDPLAYERObjects1[i].setX(gdjs.BLJCode.GDPLAYERObjects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.BLJCode.condition0IsTrue_0.val = false;
{
gdjs.BLJCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.BLJCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PLAYER"), gdjs.BLJCode.GDPLAYERObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "B Piano.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.BLJCode.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.BLJCode.GDPLAYERObjects1[i].setAnimation(gdjs.BLJCode.GDPLAYERObjects1[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.BLJCode.GDPLAYERObjects1.length ;i < len;++i) {
    gdjs.BLJCode.GDPLAYERObjects1[i].setAnimation(gdjs.BLJCode.GDPLAYERObjects1[i].getAnimation() - (1));
}
}}

}


};

gdjs.BLJCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BLJCode.GDGROUNDObjects1.length = 0;
gdjs.BLJCode.GDGROUNDObjects2.length = 0;
gdjs.BLJCode.GDPLAYERObjects1.length = 0;
gdjs.BLJCode.GDPLAYERObjects2.length = 0;

gdjs.BLJCode.eventsList0(runtimeScene);
return;

}

gdjs['BLJCode'] = gdjs.BLJCode;
