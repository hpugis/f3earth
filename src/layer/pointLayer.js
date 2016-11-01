import { Layer } from './layer';
import { Point as RenderablePoint } from '../renderable/point';
import { PointMesh } from '../mesh/pointMesh';
import { PointMaterial } from '../material/pointMaterial';
import { LayerRender } from '../render/layerRender';
import { LayerShader } from '../shader/layerShader';
export class PointLayer extends Layer {
    constructor(options) {
        super(options);
        this._render = new LayerRender(options.view.gl,
            LayerShader.pointVertexSource, LayerShader.pointFragmentSource);
    }
    _buildRenderObjects() {
        this.source.getPoints().forEach(point => {
            const renderableLine = new RenderablePoint({
                mesh: new PointMesh(point),
                material: new PointMaterial(this.style)
            });
            this._renderObjects.push(renderableLine);
        });
    }
}
