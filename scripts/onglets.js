function change_onglet(name)
                {
                        document.getElementById('onglet_'+anc_onglet).className = 'onglet_0 onglet';
                        document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
                        document.getElementById('onglet_'+anc_onglet).style.backgroundColor = '#ececec';
                        document.getElementById('onglet_'+name).style.backgroundColor = 'white';
                        document.getElementById('contenu_onglet_'+anc_onglet).style.display = 'none';
                        document.getElementById('contenu_onglet_'+name).style.display = 'block';
                        anc_onglet = name;
                }

var anc_onglet = 'developpeur';
change_onglet(anc_onglet);