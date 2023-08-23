import React, {useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle} from "react";

import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    AssetManagerBasicPopupPlugin,
    mobileAndTabletCheck
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation-js";

gsap.registerPlugin(ScrollTrigger);

export default function WebgiViewer() {
    const canvasRef = useRef(null);

    const memoizedScrollAnimation = useCallback((position, target, onUpdate) => {
        if (position && target && onUpdate) {
            scrollAnimation(position, target, onUpdate);
        }
    }, [])
    
    async function setupViewer(){

        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })
    
        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)
    
        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        // Add a popup(in HTML) with download progress when any asset is downloading.
        await viewer.addPlugin(AssetManagerBasicPopupPlugin)
        // Add plugins individually.
     await viewer.addPlugin(GBufferPlugin)
    await viewer.addPlugin(new ProgressivePlugin(32))
    await viewer.addPlugin(new TonemapPlugin(true))
    await viewer.addPlugin(GammaCorrectionPlugin)
    await viewer.addPlugin(SSRPlugin)
    await viewer.addPlugin(SSAOPlugin)
    await viewer.addPlugin(BloomPlugin)
    
        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()
    
        // Import and add a GLB file.
        //await viewer.load("scene-black.glb")
        await manager.addFromPath("scene.glb")
        //await manager.addFromPath("scene-black.glb")

        //min 47 del tutorial
        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
        viewer.scene.activeCamera.setCameraOptions({controlsEnabled: false})    
        window.scrollTo(0, 0);
        let needsUpdate = true;
        
        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", ()=> {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });
        memoizedScrollAnimation(position, target, onUpdate)
    }
    
    useEffect(() => {
        setupViewer()
    }, [])

  return (
    <div id="webgi-canvas-container">
        <canvas id="webgi-canvas" ref={canvasRef}/>
    </div>
  )
}
