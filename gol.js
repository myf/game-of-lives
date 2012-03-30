var R =28
var C =28

function create_matrix(r,c) {
    var line = new Array();
    var matrix = new Array();
    for (i=0;i<c;i++) {
        line[i] = 0;
    }
    for (i=0;i<r;i++) {
        matrix[i] = line
    }
    return matrix;
}

var matrix = create_matrix(R,C);

matrix[7][7] =1
matrix[7][8] =1
matrix[7][9] =1
matrix[7][10] =1
matrix[7][11] =1

        
        

function count_neighbors(r,c, matrix, R, C, callback) {
    var nneighbor = 0;
    for (i=-1;i<=1;i++) {
        for (j=-1;j<=1;j++) {
            if (i===0 && j===0) {continue;}
            var cell_row = (r+i+R)%R;
            var cell_col = (c+j+C)%C;
            if (matrix[cell_row][cell_col]){
               nneighbor++; 
            }
        }
    }
    callback(nneighbor);

}

function generate_next(matrix) {
    var next = create_matrix(matrix.length, matrix[0].length);
    for (i=0;i<matrix.length;i++) {
        for (j=0;j<matrix[i].length;j++){
            count_neighbors(i,j,matrix,R,C, function(count) {
                if (matrix[i][j]) {
                    if (count<2) {next[i][j] = 0;}
                    else if (2<=count<=3) {next[i][j] = 1;}
                    else if (count>3) {next[i][j] = 0;}
                }else if (count===3){
                    next[i][j]=1;
                }
            });
        }
    }   
    return next;
}

