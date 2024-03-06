import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Avatar from "../ui/avatar";

const Hero3D = () => {
    return(
        <div className="h-full w-full xl:left-32 absolute z-10">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[1, 2, 3]} />
                <Sphere args={[1, 100, 200]} scale={2.5}>
                    <MeshDistortMaterial color='#10F500' attach='material' distort={0.5} speed={2} />
                </Sphere>
            </Canvas>
            <Avatar width={400} height={400} className='object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate-updownslow' />
        </div>
    )
}

export default Hero3D;