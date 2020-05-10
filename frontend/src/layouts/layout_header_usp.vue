<template>
  <div  id="usp-header" class="ssb_blok mobile-hide">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <service-line/>
            </div>
            <div class="col-sm-4">
                700 merken  37 vestigingen
            </div>
            <div class="col-sm-2">
                <customer-service/>
            </div>
            <div class="col-sm-2">
                <customer-info/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CustomerService from '@/components/theme/blocks/HeaderUsp/customerService'
import ServiceLine from '@/components/theme/blocks/HeaderUsp/serviceLine'
import CustomerInfo from '@/components/theme/blocks/HeaderUsp/customerInfo' 

export default  {
    name: 'HeaderUsp',
    components: {
       CustomerService, 
       ServiceLine,
       CustomerInfo
    }
}
</script>


