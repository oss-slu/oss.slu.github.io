---
id: Santiago_guide
title: Style Guide for 
custom_edit_url: null
---

# Style Guide for Santiago

Overall this project did not make it very far due to various issues encountered which caused far too much delay to realistically continue, however several
helpful methods/libraries were discovered.

Connecting Matlab and Python can be done via Matlab Engine which has a somewhat convoluted setup process which can be found here
https://www.mathworks.com/help/matlab/matlab-engine-for-python.html

If Matlab is not available, a freware version named Octave is also an option, and can be intereacted with using the oct2py library 
https://pypi.org/project/oct2py/

As far as actually plotting 3D graphs as is required in SBF-SEM tools, the two compatible libraries found during our work were vpython and mayavi.
Of these, mayavi is far superior. While both can handle the data density (which is more than can be said for many libraries), mayavi renders the plots much faster
and more smoothly than Vpython, and also includes several helpful tools built in by default with a much lower inital learning curve.

Also of note, when plotting 3D graphs like this, only XY coordinates are not enough to render properly, and instead a triangular mesh model should be created 
(helpfully included in mayavi). For triangular mesh you will need 3 lists of coordinates, one for X, one for Y, and one for Z, as well as a list of "faces" 
which will be a list of triples similar to 
[((X, Y, Z), (X1, Y1, Z1), (X2, Y2, Z2)), ...]

where each triple within the triple is one vertice of the triangle, and each value (X, Y, Z, X1, Y1, Z1, etc.) points to the index of the appropriate value in the 
corresponding array, whether that is the X, Y, or Z array. It is possible to pull this data from SBF-SEM tools in two arrays, faces and vertices, and 
then pull the X, Y, and Z values from the vertices array into 3 separate arrays quite easily.

In order to get this data from SBF-SEM tools, a minor change will be required within the Matlab code. Within the StructureAPI.m file 
(SBFSEM-tools\+sbfsem\+render\StructureAPI.m) the following three lines of code will need to be added

function fv = allFV(obj)
    fv = obj.model.allFV;
end

I personally added them on lines 372-374 but the exact location should not cause too many issues so long as it is structured properly

After this change is made to SBF-SEM the needed data can be captured using the below excerpt of sample Python code

def extract(lst, ind):
    return list(list(zip(*lst))[ind])

mle = MLEngine() # Starting MATLAB engine
neu = mle.createNeuron(10912, 'i') # Must generate a neuron first
mle.eng.addpath('C:/Users/murra/Documents/SLU/SLU_OSSC/MATLAB/SBFSEM-tools/+sbfsem/+render/') # Adding the specific directory to the path
fv = mle.eng.render(neu) # (Must also render the neuron via MATLAB before data is accessible
fv = mle.eng.allFV(neu) # Getting needed data

# Splitting data into vertices and faces
verts = fv['vertices']
faces = fv['faces']

# Splitting vertices into X, Y, and Z
x = extract(verts, 0)
y = extract(verts, 1)
z = extract(verts, 2)

as mentioned in one of the comments, accessing the data this way will also render the neuron in MATLAB using SBF-SEM tools. A way to prevent this has not yet been found though I am sure there is some form of method that would work

