export class CustomNativeFunction {
    
    private static libName: string = 'libMyGame.so';
    private static libNativeName: string = 'libnativehook.so';

    //void nativehook()
    public static nativeHookPointer: NativePointer = Module.findExportByName(this.libNativeName, 'nativehook') ?? new NativePointer(0x00);

    public static getStdStringRefPointer: NativePointer = Module.findExportByName(this.libNativeName, 'getStdStringRef') ?? new NativePointer(0x00);

    //cocos2d::log(char const*, ...)
    public static cclogPointer: NativePointer = Module.findExportByName(this.libName, '_ZN7cocos2d3logEPKcz') ?? new NativePointer(0x00);

    //cocos2d::cocos2dVersion(void)
    public static ccGetVersionPointer: NativePointer = Module.findExportByName(this.libName, '_ZN7cocos2d14cocos2dVersionEv') ?? new NativePointer(0x00);

    //cocos2d::Sprite::create(std::string const&)
    public static ccSpriteCreatePointer: NativePointer = Module.findExportByName(this.libName, '_ZN7cocos2d6Sprite6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE') ?? new NativePointer(0x00);

    // cocos2d::GLView::renderScene(cocos2d::Scene *, cocos2d::Renderer *)
    public static ccGLRenderScenePointer: NativePointer = Module.getExportByName(this.libName, '_ZN7cocos2d6GLView11renderSceneEPNS_5SceneEPNS_8RendererE') ?? new NativePointer(0x00);

    //_DWORD __fastcall cocos2d::Node::addChild(cocos2d::Node *__hidden this, cocos2d::Node *, int)
    public static ccNodeAddChildPointer: NativePointer = Module.findExportByName(this.libName, '_ZN7cocos2d4Node8addChildEPS0_i') ?? new NativePointer(0x00);

    public static cclog: NativeFunction<void, NativePointerValue[]> = new NativeFunction(this.cclogPointer, 'void', ['pointer']);
    public static ccGetVerion: NativeFunction<NativePointer, NativePointerValue[]> = new NativeFunction(this.ccGetVersionPointer, 'pointer', []);
    public static ccSpriteCreate: NativeFunction<NativePointer, NativePointerValue[]> = new NativeFunction(this.ccSpriteCreatePointer, 'pointer', ['pointer']);
    public static ccNodeAddChild: NativeFunction<number, [NativePointerValue, NativePointerValue, number]> = new NativeFunction(this.ccNodeAddChildPointer, 'uint', ['pointer', 'pointer', 'int']);
    public static getStdStringRef: NativeFunction<NativePointer, NativePointerValue[]> = new NativeFunction(this.getStdStringRefPointer, 'pointer', ['pointer']);
    public static nativeHook: NativeFunction<void, NativePointerValue[]> = new NativeFunction(this.nativeHookPointer, 'void', []);
}