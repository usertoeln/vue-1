<template>
    <prison-manage :zendaniha="prisoners" v-on:azadsazi="releaseThePrisoner($event)"></prison-manage>
</template>
<script>
import Prisoners from './PrisonersEdit'
export default {
    components:{
        'prison-manage' : Prisoners
    },
    data(){
        return{
            prisoners:[
                {id:10,name:'jac',tel:123456789},
                {id:11,name:'alfred',tel:123456789},
                {id:12,name:'kamran',tel:123456789},
                {id:13,name:'nader',tel:123456789},
                {id:14,name:'ghader',tel:123456789},
                {id:15,name:'tramp',tel:123456789}
            ]
        }
    },
    methods:{
        releaseThePrisoner(pid){
            let indexPrisoner = this.prisoners.findIndex(p=>p.id == pid);
            this.prisoners.splice(indexPrisoner,1);
        }
    }
}
</script>
<style>
</style>